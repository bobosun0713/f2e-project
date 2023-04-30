#!/usr/bin/env sh

set -e

npm run build

cd dist

git init

git add .
git commit -m 'delopy'

git push -f https://github.com/bobosun0713/f2e-project.git master:gh-pages

cd -