window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity())  alert("Your payment is successful, we will prepare your order now.");
      return true;
   }
}
