#!/bin/bash

rm -fr .git
git init


git remote add origin git@github.com:mherron1/testSite.git

git fetch

git reset --mixed origin/master

git branch --set-upstream-to=origin/master master  