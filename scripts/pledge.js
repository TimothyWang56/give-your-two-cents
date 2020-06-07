'use strict';

function getPriceFromAmazon() {
  chrome.tabs.executeScript(null, {file: 'getPriceFromAmazon.js'}, function (results) {
    document.getElementById('purchase').innerHTML = results;
    let price = parsePrice(results);
    if (typeof(price) == "number") {
      document.getElementById('pledgeInformation').innerHTML = 'Round up to the nearest dollar by pledging $' + price
      document.getElementById('pledgeAmount').value = price;
    }
  })
}

function parsePrice(priceArr) {
  // chrome.extension.getBackgroundPage().console.log('price :>> ', price);
  let price = priceArr[0]
  if (price == 'None') {
    return price;
  }
  const splitArr = price.split('$');
  let parsedPrice = 0;
  if (splitArr[0] != '') {
    parsedPrice = parseFloat(splitArr[0]);
  }
  else {
    parsedPrice = parseFloat(splitArr[1]);
  }
  return Math.round((Math.ceil(parsedPrice) - parsedPrice) * 100)/100
}

getPriceFromAmazon();