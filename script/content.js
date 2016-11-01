let flonkLoaderElement;

document.body.innerHTML += '<div id="flonk-loader" class="uil-ripple-css" style="transform:scale(0.5);"><div></div><div></div></div>';
flonkLoaderElement = document.getElementById("flonk-loader");

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	flonkLoaderElement.style.visibility = (msg.action === 'on' ? 'visible' : 'hidden');
});
