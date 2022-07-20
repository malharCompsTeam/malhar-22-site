const items1 = document.querySelectorAll(".slider-item1");
const items2 = document.querySelectorAll(".slider-item2");
const items3 = document.querySelectorAll(".slider-item3");
const itemCount1 = items1.length;
const itemCount2 = items2.length;
const itemCount3 = items3.length;
const nextItem1 = document.querySelector(".next1");
const nextItem2 = document.querySelector(".next2");
const nextItem3 = document.querySelector(".next3");
const previousItem1 = document.querySelector(".previous1");
const previousItem2 = document.querySelector(".previous2");
const previousItem3 = document.querySelector(".previous3");
let count1 = 0;
let count2 = 0;
let count3 = 0;

// active1
function showNextItem() {
  items1[count1].classList.remove("active1");

  if (count1 < itemCount1 - 1) {
    count1++;
  } else {
    count1 = 0;
  }

  items1[count1].classList.add("active1");
  console.log(count1);
}

function showPreviousItem() {
  items1[count1].classList.remove("active1");

  if (count1 > 0) {
    count1--;
  } else {
    count1 = itemCount1 - 1;
  }

  items1[count1].classList.add("active1");
  // Check if working...
  console.log(count1);
}

function toggleNavigation() {
  this.nextElementSibling.classList.toggle("active1");
}


// active2
function showNextItem() {
  items2[count2].classList.remove("active2");

  if (count2 < itemCount2 - 1) {
    count2++;
  } else {
    count2 = 0;
  }

  items2[count2].classList.add("active2");
  console.log(count2);
}

function showPreviousItem() {
  items2[count2].classList.remove("active2");

  if (count2 > 0) {
    count2--;
  } else {
    count2 = itemCount2 - 1;
  }

  items2[count2].classList.add("active2");
  // Check if working...
  console.log(count2);
}

function toggleNavigation() {
  this.nextElementSibling.classList.toggle("active2");
}


// active3
function showNextItem() {
  items3[count3].classList.remove("active3");

  if (count3 < itemCount3 - 1) {
    count3++;
  } else {
    count3 = 0;
  }

  items3[count3].classList.add("active3");
  console.log(count3);
}

function showPreviousItem() {
  items3[count3].classList.remove("active3");

  if (count3 > 0) {
    count3--;
  } else {
    count3 = itemCount3 - 1;
  }

  items3[count3].classList.add("active3");
  // Check if working...
  console.log(count3);
}

function toggleNavigation() {
  this.nextElementSibling.classList.toggle("active3");
}

function keyPress(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    showPreviousItem();
  } else if (e.keyCode == "39") {
    showNextItem();
  }
}

nextItem1.addEventListener("click", showNextItem);
nextItem2.addEventListener("click", showNextItem);
nextItem3.addEventListener("click", showNextItem);
previousItem1.addEventListener("click", showPreviousItem);
previousItem2.addEventListener("click", showPreviousItem);
previousItem3.addEventListener("click", showPreviousItem);
document.addEventListener("keydown", keyPress);
