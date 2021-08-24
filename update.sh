#!/bin/bash

node scraper.js > initial.js
node resultsScraper.js > results.js
node sample.js > database.js

git add .

git commit -m "auto"

git push origin master




