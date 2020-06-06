'use strict';

function getPriceFromAmazon() {
  chrome.tabs.executeScript(null, {file: 'getPriceFromAmazon.js'}, function (results) {
    document.getElementById('purchase').innerHTML = results;
  })
}

getPriceFromAmazon();