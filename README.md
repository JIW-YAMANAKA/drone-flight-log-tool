# Drone Flight Log Tool

飛行履歴CSVから飛行日誌Excelを作成し、OneDrive上の年度管理ブック（2026_飛行時間.xlsx）の対象日セルを更新するブラウザアプリです。複数人運用では「01.ドローン飛行日誌」フォルダ共有リンクを基準に、年度管理・出力・整備点検記録を同じルート配下で扱います。

## フォルダ構成

```text
drone-flight-log-tool/
├─ index.html
├─ js/
│  └─ app.js
├─ lib/
│  ├─ msal-browser.min.js
│  ├─ jszip.min.js
│  └─ FileSaver.min.js
├─ templates/
│  ├─ 001592569.xlsx
│  └─ 日常点検記録.xlsx
└─ README.md
```

## 起動方法

VS Codeでこのフォルダを開き、Live Serverの `Go Live` を押してください。

Microsoft Entra のリダイレクトURIは、実際に開いたURLを完全一致で登録してください。
SPAではローカル開発用に `localhost` を使うのが安全です。

例：

```text
http://localhost:5500/index.html
http://localhost:5501/index.html
```

ブラウザが `127.0.0.1` で開いた場合は、アドレスバーで `localhost` に置き換えて開いてください。

## 反映済み

- 複数CSVの追加読込
- 同じファイル名CSVの再読込対応
- 重複フライト除外
- 安全に影響のあった事項の複数ページ対応
  - 1ページ目：6〜19行目
  - 2ページ目以降：5〜19行目
- CSV `Vehicle Name` を年度管理E列で完全一致検索し、同じ行のC列を登録記号として取得
- 対象日前までの累計で飛行日誌P5を作成
- 年度管理ブックの対象日セルをExcel APIで更新
- 作成した飛行日誌をダウンロード
- 2枚目に日常点検記録シートを自動追加
  - C1：登録記号
  - J6〜J14：点検結果（初期値OK、任意でNG）
  - B18：特記事項（初期値：特になし）
  - A24：実施場所（初期値：1フライト目の離陸場所）
  - E24：実施年月日（初期値：飛行年月日）
  - J24：実施者（初期値：操縦者）
- チェックONの場合、作成した飛行日誌をOneDrive指定フォルダにも保存
- 飛行日誌ファイル名：`YYYY-MM-DD_飛行日誌_登録記号_VehicleName.xlsx`
  - 例：`2026-05-08_飛行日誌_JU3237424039_r744.xlsx`
- OneDrive保存時は、保存先フォルダ内に `登録記号_VehicleName` フォルダを自動作成し、その中へ格納
  - 例：`01.ドローン飛行日誌/出力/JU3237424039_r744/2026-05-08_飛行日誌_JU3237424039_r744.xlsx`

## OneDrive保存先

v20では、OneDriveの詳細設定は画面に表示せず、アプリ内部の固定設定を使います。

固定対象：

- Microsoft Entra Client ID
- Tenant ID
- `01.ドローン飛行日誌` フォルダ共有リンク

推奨フォルダ構成：

```text
01.ドローン飛行日誌/
├─ 年度管理/
│  └─ 2026_飛行時間.xlsx
└─ 出力/
   └─ 登録記号_VehicleName/
      ├─ YYYY-MM-DD_飛行日誌_登録記号_VehicleName.xlsx
      └─ 整備点検記録_登録記号_VehicleName.xlsx
```

接続テストはCSV読込前でも実行できます。CSV読込前はルートフォルダ、年度管理ブック、出力フォルダを確認します。CSV読込後は機体照合と書込予定セルまで確認します。

ダウンロードは常に実行されます。OneDrive保存に失敗した場合も、飛行日誌のダウンロードは残ります。

## MSALについて

`lib/msal-browser.min.js` はプレースホルダーです。
社内ネットワークでCDNが使える場合はそのままでも動きます。CDNが止まる場合は、`@azure/msal-browser` の `msal-browser.min.js` をこのファイル名で差し替えてください。

## 注意

このアプリは静的HTML/JSです。DBサーバーは不要ですが、Microsoftログインを使うため `file://` ではなく、Live Serverなどの `http://localhost` で開いてください。

## v5 修正
- 日常点検記録シートのテンプレート文字にふりがなカナが連結される問題を修正。
- 入力対象セルだけを書き換え、その他の帳票文字はテンプレートの内容を維持します。


## v6: 整備点検記録
- 整備点検記録は飛行日誌とは別ファイルで出力します。
- ファイル名は `整備点検記録_機体登録番号_VehicleName.xlsx` です。年度は付けません。
- OneDrive保存ONの場合、飛行日誌と同じ `機体登録番号_VehicleName` フォルダ内へ保存します。
- 初回点検は未記録の場合のみ自動追加します。実施場所は画面で「事務所/ホテル/現地/自由記述」から選択できます。
- 20時間ごとの定期点検は、対象日の開始時点の従前総飛行時間が20時間単位を超えており、既存の整備点検記録に未記録の場合に、最新の1件だけ追加します。実施場所は「現地」です。


## v7 整備点検記録のOneDrive既存ファイル更新

- 整備点検記録は、OneDrive保存がONの場合、機体フォルダ内の既存ファイルを優先して読み込みます。
- 既存ファイルがある場合は追記更新し、同じファイル名でOneDriveへ保存します。
- 既存ファイルがない場合のみ `templates/整備点検記録.xlsx` から新規作成します。
- 通常はローカルダウンロードしません。必要な場合だけ「整備点検記録もローカルにダウンロードする」をONにします。


## v10 修正
- OneDrive共有リンクを他ユーザーが使う場合の remoteItem を考慮。
- Graph API 308 の原因箇所を追いやすいよう、エラーにGraph URL概要を表示。



## v17 UI整理

OneDriveのルートフォルダ共有リンク、個人用fallbackパス、旧方式の年度管理/保存先入力欄は画面から削除しました。アプリ内の固定リンクを使って `年度管理/2026_飛行時間.xlsx` と `出力/` を処理します。


## v19 変更点

- OneDriveのClient ID、Tenant ID、ルートフォルダ共有リンクをアプリ内部の固定設定に変更しました。
- 一般ユーザー向け画面からOneDriveの詳細設定欄を削除しました。
- 「会社アカウントでログイン」を「Microsoftアカウントでログイン」に変更しました。
- 「年度管理読込テスト」を「接続テスト」に変更しました。
- 接続テストはCSV読込前でも実行できます。CSV読込前はルートフォルダ、年度管理ブック、出力フォルダの存在確認まで行います。CSV読込後は機体照合と書込予定セルまで確認します。


## v20 変更点

- 固定ルートフォルダ共有リンクを正しい `01.ドローン飛行日誌` フォルダに更新しました。
- Graph API の `/shares` へ渡す共有URLから、末尾の `?e=...` と末尾スラッシュを除去するようにしました。
- 共有リンクの末尾に `/` が混入して別URL扱いになる問題を避けるため、スラッシュ付き候補を作らないようにしました。

## v21 変更点

- 他ユーザーが共有フォルダを初回利用する場合の 403 対策として、Graph API の `/shares/{token}/driveItem` 解決時に `Prefer: redeemSharingLink` を優先して試すようにしました。
- `redeemSharingLink` で失敗した場合は、`redeemSharingLinkIfNecessary`、ヘッダーなしの順で自動リトライします。
- 固定ルートフォルダ共有リンクは `?e=N8qytG` 付きの最新リンクを保持しつつ、Graph APIには `?e=...` 除去版と元URLの両方を候補として試します。

## v22 修正（現在は廃止）

- この版では共有フォルダ403対策として `Files.ReadWrite.All` を試しましたが、現在の運用では使用しません。
- `Files.ReadWrite.All`、`Sites.ReadWrite.All`、管理者承認前提の権限は追加しません。
- 固定ルートフォルダ共有リンクは `?e=...` を含まないURLに統一しました。
- 共有リンク候補から `?e=...` 付きURLを除外し、Graph APIにはクエリなし・末尾スラッシュなしURLだけを渡します。

現在は管理者承認なし運用に戻したため、この案内は使わないでください。Entra側へ `Files.ReadWrite.All` は追加しません。

## v23 変更点

- OneDrive保存先を個人OneDrive配下ではなく、SharePointサイト `hiko-kiroku` の共有フォルダに変更しました。
- Microsoft Graph の要求スコープを `Files.ReadWrite.All` から `Files.ReadWrite` に戻しました。
- 固定ルートフォルダ共有リンクは `?e=...` を除いたSharePointフォルダURLを使用します。
- 一般ユーザーは管理者承認なしでログインできる想定に戻しています。


## v24 変更点

- SharePointサイト `hiko-kiroku` では共有リンク `/shares/.../driveItem` 解決で403になる環境があるため、共有リンク解決を優先せず、SharePointサイトのドキュメントライブラリを直接参照する方式を追加しました。
- `Files.ReadWrite` のまま、`/sites/japaninfrastructurewaymark.sharepoint.com:/sites/hiko-kiroku` → 既定ドキュメントライブラリ → `01.ドローン飛行日誌` → `年度管理/2026_飛行時間.xlsx` / `出力` の順で探します。
- `01.ドローン飛行日誌` がドキュメントライブラリ直下にない場合も、直下フォルダを走査して `年度管理/2026_飛行時間.xlsx` と `出力` を持つフォルダをルートとして自動検出します。
- SharePoint直接参照に失敗した場合のみ、従来の共有リンク方式へフォールバックします（v25で本番経路から廃止）。

## v25 変更点

- 本番経路から共有リンク `/shares/.../driveItem` フォールバックを外しました。`/shares` は `debugGraphAccess()` の最後の診断候補でのみ実行します。
- `js/app.js` 上部の `SHAREPOINT_DRIVE_ID` と `SHAREPOINT_ROOT_FOLDER_ITEM_ID` に値を入れると、`/drives/{driveId}/items/{itemId}` と `/children` を最優先で使います。
- 固定IDが空の場合は SharePoint site path から site/drive を解決します。ただし Microsoft Graph の site path 解決は最小権限が `Sites.Read.All` のため、会社テナントでユーザー同意できない場合は固定ID方式を使ってください。
- 探索候補は `01.ドローン飛行日誌/年度管理/2026_飛行時間.xlsx`、`年度管理/2026_飛行時間.xlsx`、`01.ドローン飛行日誌/出力`、`出力` です。見つからない場合は候補とGraph endpoint/statusを表示します。
- DevTools Consoleで `debugGraphAccess()` を実行すると、`/me`、token scope、SharePoint site、drive、候補パス、固定ID、最後に `/shares` の診断結果を確認できます。アクセストークン本体は表示しません。
- `/sites/{siteId}/drive` が403になる場合、`Files.ReadWrite` だけではsite path経由のdrive解決ができないため、`SHAREPOINT_DRIVE_ID` / `SHAREPOINT_ROOT_FOLDER_ITEM_ID` を設定する固定ID方式に切り替えてください。固定ID設定後は `/sites` と `/shares` を使いません。
