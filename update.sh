#!/bin/bash
node rankingScraper.js > ufcRankings.js
node resultsScraper.js > results.js
node oddsScraper.js > odds.js
node scraper.js > initial.js
node sample.js > database.js




