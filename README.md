# Team iRobot

Roomba / iRobot製品をもっと知って、比べて、楽しむための非公式ファンコミュニティサイトです。

## コンセプト

iWanderの「編集メディア + 製品データベース + 比較/判断ツール」という情報設計を参考にしつつ、Team iRobot向けに独自設計しています。

- 最新ニュース
- 2026年の日本向け主要Roomba製品DB
- 検索・機能フィルター
- シリーズ比較
- トラブルシューティング導線
- Roombaタイムライン
- Team iRobot オープンチャット導線
- スマホ / タブレット / PC対応

## データ参照元

製品情報・ニュースは主に以下の公式情報を参照しています。

- iRobot Japan: https://www.irobot-jp.com/
- 製品一覧: https://www.irobot-jp.com/product/
- プレスリリース: https://www.irobot-jp.com/press/
- 公式オンラインストア: https://store.irobot-jp.com/

サイト内の製品情報は **2026-09-22時点** を基準にしています。価格・販売状況・仕様は変更される場合があります。

## オープンチャットURLの設定

`app.js` の先頭にある以下の値へ参加URLを入れてください。

```js
const OPENCHAT_URL = "ここにURL";
```

空欄のままの場合は、参加ボタンを押したときに「リンク未設定」と表示します。

## GitHub Pages

`.github/workflows/pages.yml` で main ブランチへの更新時にGitHub Pagesへデプロイする構成です。

## ファイル構成

- `index.html` — ページ本体
- `styles.css` — レスポンシブデザイン
- `app.js` — 製品DB、検索、フィルター、UI
- `.github/workflows/validate.yml` — 静的サイトの自動チェック

## 権利表記

Team iRobotは iRobot Corporation およびアイロボットジャパン合同会社の公式サイトではない、独立したファンコミュニティです。

iRobot、Roomba、Braava等の名称・商標は各権利者に帰属します。製品写真はアイロボットジャパン公式サイト上の公開画像を参照しています。
