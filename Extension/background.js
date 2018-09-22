// example code

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status != 'complete')
  {
    return;
  }
  var match = 'https://www.youtube.com';
  if (tab.url.substring(0, match.length) == match)
  {
    chrome.tabs.executeScript(tabID, { file: 'reminder.js' });
  });
});


