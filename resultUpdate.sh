#!/bin/bash

node shortScrape.js > tempInitial.js
node sample.js > database.js
node resultsScraper.js > results.js







