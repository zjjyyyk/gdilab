import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B99E0',
      },
      // 移动端断点配置
      screens: {
        'xs': '475px',
        // sm: 640px (Tailwind 默认)
        // md: 768px (Tailwind 默认)
        // lg: 1024px (Tailwind 默认)
        // xl: 1280px (Tailwind 默认)
        // 2xl: 1536px (Tailwind 默认)
      },
      // 使用 rem 单位的间距系统
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
