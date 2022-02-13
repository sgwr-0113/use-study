# use-study

## 作成背景、目的
React hooksに関する知識のアウトプット

## 使用技術
- React
- TypeScript
- Tailwind CSS
- sass
- MUI
- ES Lint
- Prettier
- husky
- GitHub Pages

## 工夫した点

### レスポンシブデザイン
スマートフォン・タブレット・PCの表示に対応。 
ブレイクポイント：640, 1024

### 開発効率向上
アウトプットの効率を上げるために、Tailwind CSSやMUIを用いてデザインにかかる労力を削減しました。 　
画面幅など両者で初期値の違うプロパティは、themeを用いて統一しました。

### スタイルの共通化
各ページで頻繁に用いるスタイルは、オリジナルのクラスを用いて共通化しました。 　
index.cssのapplyの内容を編集することで、レイアウトの編集が各ページに適用されます。

## 補足
- アニメーションにはsassを適用しています
- 挙動をわかりやすくするために、一部あえて`console.log`を残しています
- 学習に応じて随時ページを追加していく予定です

## ホスト先URL
https://sgwr-0113.github.io/use-study/
