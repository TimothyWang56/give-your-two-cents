'use strict';

function getPriceFromAmazon() {
  chrome.tabs.executeScript(null, {file: 'getPriceFromAmazon.js'}, function (results) {
    if(chrome.runtime.lastError) {
      console.warn("Error: " + chrome.runtime.lastError.message);
    } else {
      document.getElementById('purchase').innerHTML = results;
    }
  })
}

getPriceFromAmazon();