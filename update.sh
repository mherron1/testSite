#!/bin/bash
node scraper.js > initial.js
node rankingScraper.js > ufcRankings.js
node resultsScraper.js > results.js
node oddsScraper.js > odds.js
node sample.js > database.js

./recover.sh

./push.sh






