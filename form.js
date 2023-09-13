const submit = document.querySelector("button");
const name = document.querySelector(".nameInput");
const email = document.querySelector(".emailInput");
const phoneNumber = document.querySelector(".phoneNumberInput");
const spanName = document.querySelector(".spanName");
const spanEmail = document.querySelector(".spanEmail");
const spanPhoneNumber = document.querySelector(".spanPhoneNumber");
const successJS = document.querySelector(".successJS");

const moroccanPhoneNumberPattern = /^(05|06|07)[0-9]{8}$/;
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const divHTML = `<div><p style="color: red">wrong !!!!!</p></div>`;

spanName.style.display = "none";
spanEmail.style.display = "none";
spanPhoneNumber.style.display = "none";

submit.addEventListener("click", () => {
  const testingEmail = emailPattern.test(email.value);
  if (name.value.length < 2) {
    spanName.style.display = "inline";
  } else {
    spanName.style.display = "none";
  }
  if (!testingEmail) {
    spanEmail.style.display = "inline";
  } else {
    spanEmail.style.display = "none";
  }
  const testingNumber = moroccanPhoneNumberPattern.test(phoneNumber.value);
  if (!testingNumber) {
    spanPhoneNumber.style.display = "inline";
  } else {
    spanPhoneNumber.style.display = "none";
  }
  if (name.value.length >= 2 && testingEmail && testingNumber) {
    successJS.innerHTML = `<div class="success"><h6>The form was submitted successfully</h6></div>`;
  }
});
