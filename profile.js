
chrome.storage.sync.get('donationHistory', function(data) {
  let donationText = '';
  data.forEach(element => {
    console.log('element :>> ', element);
    donationText += element;
  });
  console.log('element :>> ', data);
  document.getElementById('donationHistory').innerHTML = donationText;
})
