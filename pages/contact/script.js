const scriptURL = "";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank You! Your submission has been received."))
    .catch((error) => console.error("Error!", error.message));
});
