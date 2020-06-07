'use strict';

function getDonationHistory() {
  chrome.storage.sync.get('donationHistory', function(data) {
    data.donationHistory.forEach(element => {
      var listItem = document.createElement("div");
      var info = document.createTextNode("I donated $" + element.amount + " to " + element.charityName);
      listItem.appendChild(info);
      listItem.setAttribute("class", "historyItem");
      document.getElementById('donationHistory').appendChild(listItem);
    });
  })
}

getDonationHistory();