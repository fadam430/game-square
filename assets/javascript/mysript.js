window.addEventListener("DOMContentLoaded", () => {
    // Set default visibility: show sell, hide others
    document.getElementById("sellForm").style.display = "block";
    document.getElementById("tradeForm").style.display = "none";
    document.getElementById("offerForm").style.display = "none";
  });

const radios = document.querySelectorAll('input[name="formType"]');
  const forms = {
    sell: document.getElementById("sellForm"),
    trade: document.getElementById("tradeForm"),
    offer: document.getElementById("offerForm")
  };

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      const selected = radio.value;

      // Show selected form and hide others
      for (let key in forms) {
        forms[key].style.display = key === selected ? "block" : "none";
      }
    });
  });

  // Optional: Reset form after submission
  Object.values(forms).forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = "success.html";
      form.reset();
    });
  });