module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia'], // 追加 "font-georgia"で使える
      },
      backgroundImage: {
        'top-wrapper': "url('/src/images/top.jpg')",
      },
    },
  },
  plugins: [],
};
