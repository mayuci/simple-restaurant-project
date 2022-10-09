window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity())  alert("Data has sent,please click ok to continue");
      return true;
   }
}
