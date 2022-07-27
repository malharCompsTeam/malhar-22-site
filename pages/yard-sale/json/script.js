const paintingsDatabase = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1583119912267-cc97c911e416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Tamatina Modern Art",
    price: "100",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
    title: "Kamina Modern Art",
    price: "200",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80",
    title: "Simon Modern Art",
    price: "250",
  },
];

//
//
//
//
//

fetch("paintings.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    localStorage.setItem("paintings", JSON.stringify(data));
    if (!localStorage.getItem("displayedPaintings")) {
      localStorage.setItem("displayedPaintings", "[]");
    }
  });

//   SETTING SOME GLOBAL VARIABLES
let paintings = JSON.parse(localStorage.getItem("paintings"));
let displayedPaintings = JSON.parse(localStorage.getItem("displayedPaintings"));

// ADDING PAINTING TO DISPLAY
function addPaintingToDisplay(paintingId) {
  let painting = paintings.find(function (painting) {
    return painting.id == paintingId;
  });

  if (displayedPaintings.length == 0) {
    displayedPaintings.push(painting);
  } else {
    let res = displayedPaintings.find((element) => element.id == paintingId);
    if (res === undefined) {
      displayedPaintings.push(painting);
    }
  }

  localStorage.setItem(
    "displayedPaintings",
    JSON.stringify(displayedPaintings)
  );
}

// REMOVING PAINTING TO DISPLAY
function removePaintingFromDisplay(paintingId) {
  let temp = displayedPaintings.filter((item) => item.id != paintingId);
  localStorage.setItem("displayedPaintings", JSON.stringify(temp));
}

// addPaintingToDisplay(1);
// addPaintingToDisplay(2);
// addPaintingToDisplay(3);
removePaintingFromDisplay(2);

// =================================================
