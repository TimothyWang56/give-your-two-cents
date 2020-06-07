'use strict';

function getDonationHistory() {
  chrome.storage.sync.get('donationHistory', function(data) {
    chrome.extension.getBackgroundPage().console.log('data :>> ', data);
    if (data.donationHistory.length == 0) {
      document.getElementById('donationHistory').innerHTML = "None so far."
    }
    else {
      data.donationHistory.forEach(element => {
        chrome.extension.getBackgroundPage().console.log('element :>> ', element);
        var listItem = document.createElement("div");
        var info = document.createTextNode("I donated $" + element.amount + " to " + element.charityName + " at " + element.time);
        listItem.appendChild(info);
        document.getElementById('donationHistory').appendChild(listItem);
      });
    }
  })
}

getDonationHistory();