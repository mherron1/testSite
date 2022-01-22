#!/bin/bash

node oddsScraper.js > odds.js
node scraper.js > initial.js
node resultsScraper.js > results.js
node sample.js > database.js



./recover.sh

./push.sh


