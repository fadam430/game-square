const radioButtons = document.querySelectorAll('input[name=""sell/trade""]');
const tradeForm = document.getElementById('form-trade');
const offerForm = document.getElementById('form-offer');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'form-trade') {
        tradeForm.style.display = 'inline';
        offerForm.style.display = 'none';
      } else {
        tradeForm.style.display = 'none';
        offerForm.style.display = 'inline';
      }
    });
  });