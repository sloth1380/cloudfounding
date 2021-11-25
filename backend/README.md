# CloudFounding backendシステム

## 初回作成

1. パッケージインストール

``` 
npm install express
npm install -D typescript
npm install -D @types/node
npm install -D @types/express
npm install -D ts-node
npm install -D ts-node-dev
npm install -D rimraf
npm install -D npm-run-all
npm install -D typeorm
npm install cors 
npm install --save-dev @types/cors
npm install pg --save
``` 

2. package.jsonにコマンド設定

```
   "main": "dist/index.js",
   "scripts": {
     "dev": "ts-node-dev --respawn src/index.ts",
     "clean": "rimraf dist",
     "tsc": "tsc",
     "build": "npm-run-all clean tsc",
     "start": "node ."
   },
```

3. TypeScript 設定
```
npx tsc --init
```

# 開発

### 開発環境

node: 
typescript: 


### ローカル環境起動
```
npm run dev
```

<http://localhost:3001>にアクセス

### デプロイ用ビルド
```
npm run build
```

### デプロイ後の実行
```
npm run start
```

## PostgreSQL

#### 起動
```
brew services start postgresql
```

#### 停止
```
brew services stpp postgresql
```

#### 接続
```
# psql -h 接続先 -p ポート番号 -U ユーザー名 -d データベース名　を入力
psql -U {user} -d {database}
```

# 
https://qiita.com/koheiiwamura/items/4045763e825ad2e2cc84