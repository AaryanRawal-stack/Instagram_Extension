// src/background.js

// Listen for messages from content.js and popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'startExport') {
      // Handle start export request.
      console.log('Start export request received');
      // Send a message to the content script to start extraction.
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'extractFollowers' });
      });
      sendResponse({ status: "Export started" }); // Send confirmation to popup
    } else if (request.action === 'followersExtracted') {
      // Handle follower data received from content.js.
      console.log('Follower data received:', request.data);
      // Process the data and send it to popup.js for export.
      chrome.runtime.sendMessage({ action: 'exportData', data: request.data });
    }
  });