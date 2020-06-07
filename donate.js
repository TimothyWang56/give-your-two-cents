let amountDonated = document.getElementById('amountDonated');
let pledgeAmount = document.getElementById('pledgeAmount');
let addToFundsButton = document.getElementById('addToFundsButton');

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