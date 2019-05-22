#!/bin/bash
npm run build
# ssh root@120.78.177.9 "mkdir /usr/local/nginx/time-record"
scp -r ./dist/* root@120.78.177.9:/usr/local/nginx/app
