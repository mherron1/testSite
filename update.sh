#!/bin/bash
node scraper.js > initial.js
node resultsScraper.js > results.js
node sample.js > database.js

./push.sh
