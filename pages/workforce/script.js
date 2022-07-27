// var nodes = document.querySelectorAll(".slider-item1, .slider-item2, .slider-item3");
// for(var i =0; i < nodes.length; i++){
//     var nodecount[i] = nodes[i].length;
// }
const slider1 = document.querySelectorAll(".slider1-item");
const slider1Count = slider1.length;
const slider2 = document.querySelectorAll(".slider2-item");
const slider2Count = slider2.length;
const slider3 = document.querySelectorAll(".slider3-item");
const slider3Count = slider3.length;
const nextItem1 = document.querySelector(".next1");
const previousItem1 = document.querySelector(".previous1");
const nextItem2 = document.querySelector(".next2");
const previousItem2 = document.querySelector(".previous2");
const nextItem3 = document.querySelector(".next3");
const previousItem3 = document.querySelector(".previous3");
const navItem = document.querySelector("a.toggle-nav");
// const counter = [slider1Count, slider2Count, slider3Count];
// const sliders = [slider1, slider2, slider3];
let count1 = 0;
let count2 = 0;
let count3 = 0;

function showNextItem1() {
    slider1[count1].classList.remove("active");
    
    if (count1 < slider1Count- 1) {
        count1++;
    } else {
        count1 = 0;
    }
    
    slider1[count1].classList.add("active");
    console.log(count1);
}
    
function showNextItem2() {
    slider2[count2].classList.remove("active");
    
    if (count2 < slider2Count- 1) {
        count2++;
    } else {
        count2 = 0;
    }
    
    slider2[count2].classList.add("active");
    console.log(count2);
    }
    
   
function showNextItem3() {
    slider3[count3].classList.remove("active");
    
    if (count3 < slider3Count- 1) {
        count3++;
    } else {
        count3 = 0;
    }
    slider3[count3].classList.add("active");
    console.log(count3);
    }
    

function showPreviousItem1() {
    slider1[count1].classList.remove("active");

    if (count1 > 0) {
    count1--;
    } else {
    count1 = slider1Count - 1;
    }

    slider1[count1].classList.add("active");
    // Check if working...
    console.log(count1);
}
    
function showPreviousItem2() {
    slider2[count2].classList.remove("active");

    if (count2 > 0) {
    count2--;
    } else {
    count2 = slider2Count - 1;
    }

    slider2[count2].classList.add("active");
    // Check if working...
    console.log(count2);
}
    
    
function showPreviousItem3() {
    slider3[count3].classList.remove("active");

    if (count3 > 0) {
    count3--;
    } else {
    count3 = slider3Count - 1;
    }

    slider3[count3].classList.add("active");
    // Check if working...
    console.log(count3);
}
    

function toggleNavigation() {
  this.nextElementSibling.classList.toggle("active");
}

function keyPress(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    showPreviousItem();
  } else if (e.keyCode == "39") {
    showNextItem();
  }
}

nextItem1.addEventListener("click", showNextItem1);
nextItem2.addEventListener("click", showNextItem2);
nextItem3.addEventListener("click", showNextItem3)
previousItem1.addEventListener("click", showPreviousItem1);
previousItem2.addEventListener("click", showPreviousItem2);
previousItem3.addEventListener("click", showPreviousItem3);
document.addEventListener("keydown", keyPress);
navItem.addEventListener("click", toggleNavigation);