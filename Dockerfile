# Step 1: React (TypeScript) アプリをビルドするステージ
FROM node:18 AS build

## 作業ディレクトリを /app に設定
## 以降の命令はこのディレクトリ内で実行されます（代入的なイメージ）
WORKDIR /app

## 依存関係の定義ファイル(package.json と package-lock.json)をコピー
COPY package*.json ./

## npm パッケージをインストール
RUN npm install

## アプリのソースコードを全てコピー
## ホスト（あなたのPC）のカレントディレクトリ（Docker build を実行した場所）にあるすべてのファイル・フォルダ
## ↓
## Dockerイメージ内の現在の作業ディレクトリ（WORKDIRで指定した /app）
COPY . .

## Reactアプリを本番用にビルド（静的ファイルを /app/build に生成）
RUN npm run build


# Step 2: Nginxでビルド済みファイルをホストするステージ
FROM nginx:alpine

## Step1のビルド成果物をNginxの公開ディレクトリにコピー
COPY --from=build /app/build /usr/share/nginx/html

## SPA対応のためのカスタムNginx設定をコピー
COPY nginx.conf /etc/nginx/conf.d/default.conf

## コンテナの80番ポートを外部に公開
EXPOSE 80

## Nginxをフォアグラウンドで起動（コンテナを止めないために必須）
CMD ["nginx", "-g", "daemon off;"]