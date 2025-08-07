const confirmBtn = document.getElementById('confirmBtn');
const continueBtn = document.getElementById('continueBtn');
const form = document.getElementById('cardForm');
const thankYouMessage = document.getElementById('thankYouMessage');
const cardName = document.getElementById('cardholder')
  const number = document.getElementById('cardnumber')
  const mm = document.getElementById('mm')
  const yy = document.getElementById('yy')
  const cvc = document.getElementById('cvc')



  // error
  const nameErr = document.getElementById("nameErr");
  const cardErr = document.getElementById("cardErr");
  const dateErr = document.getElementById("dateErr");
  const cvcErr = document.getElementById("cvcErr");


// the expressions
const nameRegex = /^[A-Za-z\s'-]{2,40}$/;
const cardRegex = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
const monthRegex = /^(0[1-9]|1[0-2])$/;
const yearRegex = /^\d{2,4}$/;
const cvcRegex = /^\d{3}$/;





confirmBtn.addEventListener("click", function (e) {
   e.preventDefault()
    let hasError = false;

    // Validate name
    const nameValue =cardName.value.trim();
    if (!nameValue) {
      nameErr.textContent = "Cardholder name is required.";
      hasError = true;
    } else if (!nameRegex.test(nameValue)) {
      nameErr.textContent = "Enter a valid name (2–40 letters).";
      hasError = true;
    } else {
      nameErr.textContent = "";
    }

    // Validate card number
    const cardValue = number.value.trim();
    if (!cardValue) {
      cardErr.textContent = "Card number is required.";
      hasError = true;
    } else if (!cardRegex.test(cardValue)) {
      cardErr.textContent = "Enter a valid 16-digit card number.";
      hasError = true;
    } else {
      cardErr.textContent = "";
    }

    // Validate month
    const mmValue = mm.value.trim();
    if (!mmValue || !monthRegex.test(mmValue)) {
      dateErr.textContent = "invalid";
      hasError = true;
    } else {
      dateErr.textContent = "";
    }

    // Validate year
    const yyValue = yy.value.trim();
    if (!yyValue || !yearRegex.test(yyValue)) {
      dateErr.textContent += "Enter valid year.";
      hasError = true;
    }

    
    const cvcValue = cvc.value.trim();
    if (!cvcValue) {
      cvcErr.textContent = "CVC is required.";
      hasError = true;
    } else if (!cvcRegex.test(cvcValue)) {
      cvcErr.textContent = "CVC must be 3 digits.";
      hasError = true;
    } else {
      cvcErr.textContent = "";
    }

    
    if (!hasError) {
      thankYouMessage.style.display = "flex"
      form.style.display = "none";
      
    }
  });

  continueBtn.addEventListener("click",()=>{
    // thankYouMessage.style.display="none"
    // form.style.display="flex"
     location.reload()

  })