#!/usr/bin/env bash

rm -rf .next
rm -rf node_modules/*
rm -rf static/sitemap.xml

set -ex

npm i -D
# npx browserslist@latest --update-db
npm run build
npm run dev
