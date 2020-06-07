'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({balance: 0.0}, function() {
    console.log("Balance set to 0.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});