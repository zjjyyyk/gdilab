import os
import json
import requests
import pandas as pd
from PIL import Image
from io import BytesIO
import shutil

# === 配置部分 ===
excel_path = "people_71.xlsx"

origin_dir = "./images/origin"
people_dir = "./images/people"
os.makedirs(origin_dir, exist_ok=True)
os.makedirs(people_dir, exist_ok=True)

undergrad_json = "undergrads.json"
grad_json = "grads.json"
phd_json = "phds.json"
master_json = "masters.json"

# 博士生名单
phd_names = ["李泽宁", "廖美昊", "邬征宇", "吴佳毅", "叶小伟", "曾越", "蒋佳祺", "吴翔",
             "李洵楷", "崔冬航", "冷小雨", "李诚", "周俊杰", "杨一春", "邢宝"]

# === 压缩函数 ===
def compress_image_to_limit(image_path, output_path, max_size_kb=250, min_quality=30, step=5):
    try:
        with Image.open(image_path) as img:
            img_format = img.format or "JPEG"
            quality = 95

            # 阶段1：调整质量
            while True:
                buffer = BytesIO()
                img.save(buffer, format=img_format, quality=quality, optimize=True)
                size_kb = len(buffer.getvalue()) / 1024
                if size_kb <= max_size_kb or quality <= min_quality:
                    break
                quality -= step

            # 阶段2：若仍超标，缩小尺寸
            if size_kb > max_size_kb:
                width, height = img.size
                while size_kb > max_size_kb and (width > 200 or height > 200):
                    width = int(width * 0.9)
                    height = int(height * 0.9)
                    img_resized = img.resize((width, height), Image.LANCZOS)
                    buffer = BytesIO()
                    img_resized.save(buffer, format=img_format, quality=quality, optimize=True)
                    size_kb = len(buffer.getvalue()) / 1024
                    img = img_resized

            # 保存压缩后图片
            with open(output_path, "wb") as f:
                f.write(buffer.getvalue())
    except Exception as e:
        print(f"⚠️ 压缩失败 {image_path}: {e}")

# === 读取 Excel 数据 ===
df = pd.read_excel(excel_path, dtype=str).fillna("")

name_col = "1、姓名："
email_col = "2、个人邮箱"
research_col = "3、在校生填研究方向"
grad_col = "4、是否毕业，如毕业请填毕业时间"
photo_col = "6、个人照片（不超过 300*300,100kb, jpg格式）："

undergrads, grads, phds, masters = [], [], [], []

# === 遍历表格 ===
for _, row in df.iterrows():
    name = row[name_col].strip()
    email = row[email_col].strip()
    research = row[research_col].strip()
    grad_status = row[grad_col].strip()
    photo_url = row[photo_col].strip()

    origin_filename = f"{name}.jpg"
    origin_path = os.path.join(origin_dir, origin_filename)
    final_filename = f"{name}.jpg"
    final_path = os.path.join(people_dir, final_filename)
    web_path = f"/images/people/{final_filename}"

    # === 下载照片到 origin 目录 ===
    if photo_url:
        try:
            r = requests.get(photo_url, timeout=10)
            if r.status_code == 200:
                with open(origin_path, "wb") as f:
                    f.write(r.content)
                size_kb = os.path.getsize(origin_path) / 1024
                if size_kb > 250:
                    om_name = f"OM{name}.jpg"
                    om_path = os.path.join(origin_dir, om_name)
                    os.rename(origin_path, om_path)
                    origin_path = om_path
            else:
                print(f"❌ 下载失败: {name} ({r.status_code})")
        except Exception as e:
            print(f"⚠️ 下载出错 {name}: {e}")

    # === JSON 记录 ===
    record = {
        "name": name,
        "photo": web_path,
        "research": research,
        "email": email
    }

    # === 分类 ===
    if grad_status in ["否", "未毕业", "还未毕业", "no", "未完成"]:
        undergrads.append(record)
        if name in phd_names:
            phds.append(record)
        else:
            masters.append(record)
    else:
        grads.append(record)

# === 写入 JSON ===
def save_json(filename, data):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

save_json(undergrad_json, undergrads)
save_json(grad_json, grads)
save_json(phd_json, phds)
save_json(master_json, masters)

print("✅ JSON 文件已生成。")

# === 第二阶段：压缩所有 origin 图片并复制到 people 目录 ===
for filename in os.listdir(origin_dir):
    src_path = os.path.join(origin_dir, filename)
    if filename.lower().endswith((".jpg", ".jpeg", ".png")):
        # 删除 OM 前缀后生成目标名
        clean_name = filename.replace("OM", "", 1) if filename.startswith("OM") else filename
        dst_path = os.path.join(people_dir, clean_name)
        try:
            compress_image_to_limit(src_path, dst_path, max_size_kb=250)
        except Exception as e:
            print(f"⚠️ 图片处理失败 {filename}: {e}")

print("🎯 所有图片已复制并压缩到 images/people/")
print("✅ 任务全部完成！")
