import { defineConfig } from 'vite-plugin-windicss';

// 用变量定义配置，方便多主题切换
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgba(var(${variable}), ${opacityValue})`;
  };
}

export default defineConfig({
  preflight: false,
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        primary: '#8fc31f',
        danger: '#EB5B59',
        // black: withOpacityValue('--color-default'),
        theme: '#000000D9' // 默认文字颜色rgba(0,0,0,.85); 其他色值可用 text-theme/60, text-theme/50等
      }
    }
  },
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between'
  }
});
