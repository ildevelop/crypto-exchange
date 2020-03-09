console = chrome.extension.getBackgroundPage().console;
const inputCoin = document.getElementById('coinInput');
const buttonPayments = document.getElementById('submit_btn');
const coinList = document.getElementById('coinList');


function environmentChange() {
  console.log("coinList", coinList.innerHTML);
  chrome.storage.sync.set({
    coinList: coinList.innerHTML
  });
  coinList.innerHTML = inputCoin.value
}

function domReady() {
  chrome.storage.sync.get({
    coinList: 'No result yet',
  }, function (items) {
    coinList.innerHTML = items.coinList
  });

  inputCoin.addEventListener('change', environmentChange);
  buttonPayments.addEventListener('click', environmentChange);
}

document.addEventListener('DOMContentLoaded', domReady);
