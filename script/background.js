const filter = { urls: [ "<all_urls>" ] };

chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest, filter);
chrome.webRequest.onCompleted.addListener(onRequestCompletedOrErrored, filter);
chrome.webRequest.onErrorOccurred.addListener(onRequestCompletedOrErrored, filter);

function onBeforeRequest({tabId}) {
    if (tabId >= 0) {
        chrome.tabs.sendMessage(tabId, {action: 'on'});
    }
}

function onRequestCompletedOrErrored({tabId}) {
    if (tabId >= 0) {
        chrome.tabs.sendMessage(tabId, {action: 'off'});
    }
}
