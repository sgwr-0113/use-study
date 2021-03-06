module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScriptでチェックされる項目をLintから除外する設定
    'prettier', // prettierのextendsは他のextendsより後に記述する
    'plugin:tailwindcss/recommended', // TailwindCSS関連
  ],
  plugins: ['@typescript-eslint', 'tailwindcss'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定
  },
  root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
  rules: {},
  settings: {
    tailwindcss: {
      whitelist: ['text-shadow', 'text-shadow-(md|lg|xl|2xl|none)'], // tailwind.config.jsで追加した'text-shadow'をクラスとして認める
    },
  },
};
