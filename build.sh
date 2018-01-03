#!/bin/sh

set -x
echo "====================npm install begin================"
npm install
echo "====================npm install success================"

echo "====================npm build begin================"
npm run build

echo "====================npm build success================"