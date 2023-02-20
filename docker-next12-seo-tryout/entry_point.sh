#!/usr/bin/env bash

rm -rf .next/*
rm -rf node_modules/*
rm -rf package-lock.json

set -ex

npm install

npm run build
npm run start
