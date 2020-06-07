'use strict';

let balance = document.getElementById('balance');
let pledgeAmount = document.getElementById('pledgeAmount');
let addToFundsButton = document.getElementById('addToFundsButton');

function isValidFloat(str) {
    return (/^-?[\d]*(\.[\d]+)?$/g).test(str);
}

addToFundsButton.onclick = function() {
    const amountToAddStr = pledgeAmount.value;
    if (isValidFloat(amountToAddStr)) {
        const amountToAdd = Math.round(parseFloat(amountToAddStr) * 100)/100;
        if (amountToAdd > 0) {
            chrome.storage.sync.get('balance', function(data) {
                let newBalance = Math.round((data.balance + amountToAdd) * 100)/100;
                chrome.storage.sync.set({balance: newBalance}, function() {
                    updateProgressBar();
                });
            });
        }
        pledgeAmount.value = "";
    } else {
        pledgeAmount.value = "";
    }
}

let myBar = document.getElementById('myBar');
function updateProgressBar() {
    chrome.storage.sync.get('balance', function(balanceData) {
        chrome.storage.sync.get('milestone', function(milestoneData) {
            if (balanceData.balance < milestoneData.milestone) {
                const percentage = Math.round(balanceData.balance/milestoneData.milestone * 100);
                myBar.style.width = percentage + "%";
            } else {
                myBar.style.width = "100%";
            }
            const progressString = "$" + balanceData.balance + "/$" + milestoneData.milestone + " (" + myBar.style.width + ")"
            balance.innerHTML = progressString;
        });
    });
}

updateProgressBar();