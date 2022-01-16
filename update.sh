#!/bin/bash

node scraper.js > initial.js
node resultsScraper.js > results.js
node sample.js > database.js
node oddsScraper.js > odds.js


./recover.sh

./push.sh


