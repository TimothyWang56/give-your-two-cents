'use strict';

let balance = document.getElementById('balance');
let pledgeAmount = document.getElementById('pledgeAmount');
let addToFundsButton = document.getElementById('addToFundsButton');

function updateBalanceDisplay() {
    chrome.storage.sync.get('balance', function(data) {
        balance.innerHTML = data.balance;
    });
}

updateBalanceDisplay();

function isValidFloat(str) {
    return (/^-?[\d]*(\.[\d]+)?$/g).test(str);
}

addToFundsButton.onclick = function() {
    const amountToAddStr = pledgeAmount.value;
    if (isValidFloat(amountToAddStr)) {
        const amountToAdd = parseFloat(amountToAddStr);
        chrome.storage.sync.get('balance', function(data) {
            let newBalance = data.balance + amountToAdd;
            chrome.storage.sync.set({balance: newBalance}, function() {
                updateBalanceDisplay();
                pledgeAmount.value = "";
            });
        });
    } else {
        chrome.extension.getBackgroundPage().console.log('not correct format for a number')
        pledgeAmount.value = "";
    }
}
