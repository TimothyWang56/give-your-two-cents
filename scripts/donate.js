let amountDonated = document.getElementById('amountDonated');
let charityName = document.getElementById('charityName');
let donateButton = document.getElementById('donateButton');

donateButton.onclick = function() {
  if (amountDonated.value !== "" && charityName.value !== "") {
    const amountDonatedRounded = Math.round(parseFloat(amountDonated.value) * 100)/100;
    chrome.storage.sync.get('balance', function(data) {
        let newBalance = (data.balance < amountDonatedRounded) ? 0: Math.round((data.balance - amountDonatedRounded) * 100)/100;
        chrome.storage.sync.set({balance: newBalance}, function() {
          chrome.storage.sync.get('amountDonated', function(donateData) {
            let newAmountDonated = Math.round((donateData.amountDonated + amountDonatedRounded) * 100)/100;
            chrome.storage.sync.set({amountDonated: newAmountDonated}, function() {
              chrome.storage.sync.get('donationHistory', function(historyData) {
                let donationHistory = historyData.donationHistory;
                donationHistory.push({
                  amount: amountDonatedRounded,
                  charityName: charityName.value,
                });
            });
            });
        });
        });
    });
    amountDonated.value = "";
    charityName.value = "";
  }
}