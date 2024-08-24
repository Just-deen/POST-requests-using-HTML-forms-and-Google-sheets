const endPoint =
  "https://script.google.com/macros/s/AKfycbzgvxM49_MCRSdVnNYG_smggEc4xPOdlbhQojifGMJiP4TGUgl-bna27XIDleLmcyW4/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

//listens for changes in the form
form.addEventListenter("submit", submitFormHandler);

function submitFormHandler(event) {
  //prevents form submission until process is executed
  event.preventDefault();

  //submit form
  submitForm(form)
    //handle errors
    .then(showSuccessMessage)
    .finally(resetForm);
}

function submitForm(formData) {
  //POST form data to endpoint
  return fetch(endPoint, { method: "POST", body: formData });
}

function showSuccessMessage() {
  //display success message for 9ms
  msg.innerHTML = "Message sent successfully";
  setTimeout(() => {
    msg.innerHTML = "";
  }, 900);
}

function resetForm() {
  //clears the credentials temporarily stored in the form
  form.reset();
}
