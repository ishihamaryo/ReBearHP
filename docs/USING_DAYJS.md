# Using day.js with this Nuxt project

このリポジトリでは `dayjs` を Nuxt プラグインで provide しています。

セットアップ手順

1. パッケージをインストール:

```bash
# npm
npm install dayjs

# pnpm
pnpm add dayjs
```

2. プラグイン: `/plugins/dayjs.ts` を作成済みです。プラグインは以下の挙動をします:

- `dayjs` をインポートしてロケールを `ja` に設定
- `provide` で `dayjs` をアプリ全体に公開（`useNuxtApp().$dayjs`）

利用例

```ts
// コンポーネント内
const { $dayjs } = useNuxtApp()
console.log($dayjs().format('YYYY-MM-DD'))

// または composable を使う
const dayjs = useDayjs()
console.log(dayjs().format('YYYY-MM-DD'))
```

補足

- サーバ・クライアント両方で使えます（プラグインはユニバーサル）。
- 追加のプラグイン（timezone, utc, localizedFormat など）を使う場合は、`/plugins/dayjs.ts` に `import` を追加して初期化してください。
