# use-study

## 作成背景・目的
React hooksに関する知識のアウトプット用

## 使用技術
- React
- TypeScript
- Tailwind CSS
- sass
- MUI
- ESLint
- Prettier
- husky
- GitHub Pages

## 工夫した点

### レスポンシブデザイン
スマートフォン・タブレット・PCの**3種類の画面表示**に対応。

```
ブレイクポイント：640, 1024
```

### コード検証の自動化

毎コミット時にlintを実行するよう、**huskyでコード検証を自動化**しました。

Prettierは保存時に実行されるように設定しています。

### 開発効率向上
アウトプットの効率を上げるために、**Tailwind CSS**や**MUI**を用いてデザインにかかる労力を削減しました。

画面幅など両者で初期値の違うプロパティは、themeを用いて統一しました。

### スタイルの共通化
各ページで頻繁に用いるスタイルは、オリジナルのクラスを用いて共通化しました。

index.cssの`@apply`の内容を編集することで、レイアウトの編集が各ページに適用されます。

## 補足
- アニメーションにはsassを適用しています
- 挙動をわかりやすくするために、一部あえて`console.log`を残しています
- 学習に応じて随時ページを追加していく予定です

## ホスト先URL
https://sgwr-0113.github.io/use-study/
