const endPoint =
  "https://script.google.com/macros/s/AKfycbzgvxM49_MCRSdVnNYG_smggEc4xPOdlbhQojifGMJiP4TGUgl-bna27XIDleLmcyW4/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(endPoint, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       msg.innerHTML = "Message sent successfully";
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 900);
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

// listens for changes in the form
form.addEventListener("submit", submitFormHandler);

function submitFormHandler(event) {
  //prevents form submission until process is executed
  event.preventDefault();

  const formData = new FormData(form);
  //submit form
  submitForm(formData)
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
