#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
echo 'learningme.me' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:chanshu0508/wikiBase.git
else
  msg='来自github action的自动部署'
  githubUrl=https://chanshu0508:${GITHUB_TOKEN}@github.com/chanshu0508/wikiBase.git
  git config --global user.name "learner"
  git config --global user.email "chanshuwork@gmail.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist