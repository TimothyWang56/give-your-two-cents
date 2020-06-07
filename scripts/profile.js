'use strict';

function getDonationHistory() {
  chrome.storage.sync.get('donationHistory', function(data) {
<<<<<<< HEAD
    data.donationHistory.forEach(element => {
      var listItem = document.createElement("div");
      var info = document.createTextNode("I donated $" + element.amount + " to " + element.charityName);
      listItem.appendChild(info);
      listItem.setAttribute("class", "historyItem");
      document.getElementById('donationHistory').appendChild(listItem);
    });
=======
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
>>>>>>> d8648e083599c59f6c3b8c3a0063500aaa673d40
  })
}

getDonationHistory();