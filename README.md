# TypeScript 学習リポジトリ

TypeScript の学習と実践のためのプロジェクト集です。

## 📁 プロジェクト構造

```
TS_knowlege/
├── README.md                 # このファイル（プロジェクト全体の説明）
└── random-dog/              # 猫画像表示アプリ
    ├── app/                 # Next.js App Router
    │   ├── page.tsx         # メインページ
    │   ├── cat-image.tsx    # 猫画像表示コンポーネント
    │   ├── fetch-image.ts   # 画像取得API関数
    │   ├── env.ts           # 環境変数設定
    │   ├── layout.tsx       # アプリケーションレイアウト
    │   └── globals.css      # グローバルスタイル
    ├── public/              # 静的ファイル
    ├── package.json         # 依存関係とスクリプト
    ├── tsconfig.json        # TypeScript設定
    ├── next.config.ts       # Next.js設定
    ├── eslint.config.mjs    # ESLint設定
    └── README.md            # プロジェクト固有のREADME
```

## 🐱 Random Cat Image App

### 概要

The Cat API を使用してランダムな猫画像を表示する Web アプリケーションです。

### 主な技術スタック

- **Next.js 15.4.1** - React フレームワーク（App Router 使用）
- **React 19.1.0** - ユーザーインターフェース
- **TypeScript 5** - 型安全な JavaScript
- **Tailwind CSS 4** - ユーティリティファースト CSS フレームワーク
- **ESLint** - コード品質管理

### 主な機能

- 🎲 ランダムな猫画像の表示
- 🔄 ボタンクリックで新しい画像を取得
- 📱 レスポンシブデザイン
- ⚡ Server Actions と Client Components の適切な使い分け
- 🔒 型安全な API 通信

### 技術的な特徴

- **Server Actions**: `fetch-image.ts`でサーバーサイドでの API 呼び出し
- **Client Components**: `cat-image.tsx`でインタラクティブな UI
- **型安全性**: カスタム型ガードでランタイム安全性を確保
- **エラーハンドリング**: API レスポンスの適切な検証

## 🚀 セットアップと実行

### 前提条件

- Node.js 18 以上
- npm / yarn / pnpm / bun

### インストールと実行

1. **リポジトリのクローン**

   ```bash
   git clone <repository-url>
   cd TS_knowlege
   ```

2. **プロジェクトディレクトリに移動**

   ```bash
   cd random-dog
   ```

3. **依存関係のインストール**

   ```bash
   npm install
   ```

4. **環境変数の設定**

   ```bash
   # app/env.ts ファイルでThe Cat API キーを設定
   ```

5. **開発サーバーの起動**

   ```bash
   npm run dev
   ```

6. **ブラウザでアクセス**
   - http://localhost:3000 を開く

### 利用可能なスクリプト

```bash
npm run dev      # 開発サーバー起動（Turbopack使用）
npm run build    # 本番用ビルド
npm run start    # 本番サーバー起動
npm run lint     # ESLintでコード品質チェック
```

## 📚 学習ポイント

このプロジェクトで学べる TypeScript/Next.js の概念：

1. **型安全な API 通信**

   - カスタム型定義
   - 型ガード関数の実装
   - ランタイム型検証

2. **Next.js 15 の最新機能**

   - App Router
   - Server Actions
   - Server/Client Components の使い分け

3. **React 19 の新機能**

   - 最新の React Hook
   - 並行機能

4. **モダンな開発環境**
   - TypeScript 設定
   - ESLint 設定
   - Tailwind CSS 4

## 🎯 今後の拡張予定

- [ ] 画像のお気に入り機能
- [ ] 画像のダウンロード機能
- [ ] 猫の品種フィルター
- [ ] データベース連携
- [ ] テスト環境の構築

## 📝 学習メモ

各プロジェクトで学んだ内容や改善点を記録していく予定です。

---

**作成日**: 2025 年 7 月 
**更新日**: 2025 年 7 月
