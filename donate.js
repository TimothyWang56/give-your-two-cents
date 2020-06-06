'use strict';

function getPriceFromAmazon() {
  chrome.tabs.executeScript(null, {file: 'getPriceFromAmazon.js'}, function (results) {
    document.getElementById('purchase').innerHTML = results;
    let price = parsePrice(results);
    getDonationPrice(price);
  })
}

function getDonationPrice(price) {
  chrome.tabs.executeScript(null, {code: 'console.log("' + price + '");'}, function (results) {
  })
}

function parsePrice(priceArr) {
  // chrome.extension.getBackgroundPage().console.log('price :>> ', price);
  let price = priceArr[0]
  if (price == 'None') {
    return price;
  }
  const split_arr = price.split('$');
  let parsedPrice = 0;
  if (split_arr[0] != '') {
    parsedPrice = parseFloat(split_arr[0]);
  }
  else {
    parsedPrice = parseFloat(split_arr[1]);
  }
  return Math.round((Math.ceil(parsedPrice) - parsedPrice) * 100)/100
}

getPriceFromAmazon();