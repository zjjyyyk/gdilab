const fs = require('fs');
const path = require('path');

// 创建目录
const dirs = [
  'public/images',
  'public/images/carousel',
  'public/images/people',
  'public/images/activities',
  'public/images/publications',
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 创建简单的SVG占位图
const createSVG = (width, height, text) => `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#E5E7EB"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
        font-family="Arial" font-size="24" fill="#9CA3AF">
    ${text}
  </text>
</svg>`;

// 生成占位图
fs.writeFileSync('public/images/logo.svg', createSVG(100, 100, 'LOGO'));
fs.writeFileSync('public/images/demo.jpg', createSVG(800, 600, 'Demo Image'));

['slide1', 'slide2', 'slide3'].forEach((name, i) => {
  fs.writeFileSync(
    `public/images/carousel/${name}.jpg`,
    createSVG(1920, 650, `Slide ${i + 1}`)
  );
});

fs.writeFileSync(
  'public/images/people/person-placeholder.jpg',
  createSVG(300, 300, 'Person')
);

fs.writeFileSync(
  'public/images/activities/activity-placeholder.jpg',
  createSVG(400, 300, 'Activity')
);

['pub1', 'pub2', 'pub3', 'pub4', 'pub5'].forEach((name, i) => {
  fs.writeFileSync(
    `public/images/publications/${name}.jpg`,
    createSVG(270, 180, `Paper ${i + 1}`)
  );
});

console.log('Placeholder images created successfully!');
