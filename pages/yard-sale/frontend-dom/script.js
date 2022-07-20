// RESERVATION BUTTON-MODAL FUNCTIONALITY

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn[0].onclick = function () {
  modal.style.display = "block";
};
btn[1].onclick = function () {
  modal.style.display = "block";
};
btn[2].onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const paintingContainer = document.querySelector("#paintingA1");

const deletePainting = () => {
  let throwawayNode = paintingContainer.remove();
};

const onDataSubmission = () => {
  deletePainting();
};
