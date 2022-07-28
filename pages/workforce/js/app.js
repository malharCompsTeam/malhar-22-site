import eventsData from "./events-data.js";
import managementData from "./management-data.js";
import networkingData from "./networking-data.js";

const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const container1 = document.querySelector(".slide-container1");
const prevBtn1 = document.querySelector(".prev-btn1");
const nextBtn1 = document.querySelector(".next-btn1");

const container2 = document.querySelector(".slide-container2");
const prevBtn2 = document.querySelector(".prev-btn2");
const nextBtn2 = document.querySelector(".next-btn2");

// if length is 1 hide buttons
if (eventsData.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}

// if length is 2, add copies of slides
let eventsPeople = [...eventsData];
if (eventsData.length === 2) {
  eventsPeople = [...eventsData, ...eventsData];
}

container.innerHTML = eventsPeople
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === eventsPeople.length - 1) {
      position = "last";
    }
    if (eventsData.length <= 1) {
      position = "active";
    }
    return `<article class="slide ${position}">  
<img src=${img} class="img" alt="${name}"/>  
<h4>${name}</h4>  
<p class="title">${job}</p>  
<p class="text">  
${text}  
</p>  
</article>`;
  })
  .join("");

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);
  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next.classList.add("last");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  startSlider();
});

prevBtn.addEventListener("click", () => {
  startSlider("prev");
});

// ====================================================================

if (managementData.length === 1) {
  nextBtn1.style.display = "none";
  prevBtn1.style.display = "none";
}

// if length is 2, add copies of slides
let managementPeople = [...managementData];
if (managementData.length === 2) {
  managementPeople = [...managementData, ...managementData];
}

container1.innerHTML = managementPeople
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next1";
    if (slideIndex === 0) {
      position = "active1";
    }
    if (slideIndex === managementPeople.length - 1) {
      position = "last1";
    }
    if (managementData.length <= 1) {
      position = "active1";
    }
    return `<article class="slide1 ${position}">  
<img src=${img} class="img" alt="${name}"/>  
<h4>${name}</h4>  
<p class="title">${job}</p>  
<p class="text">  
${text}  
</p>  
</article>`;
  })
  .join("");

const startSlider1 = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active1");
  const last = document.querySelector(".last1");
  let next = active.nextElementSibling;
  if (!next) {
    next = container1.firstElementChild;
  }
  active.classList.remove(["active1"]);
  last.classList.remove(["last1"]);
  next.classList.remove(["next1"]);
  if (type === "prev1") {
    active.classList.add("next1");
    last.classList.add("active1");
    next.classList.add("last1");
    next = last.previousElementSibling;
    if (!next) {
      next = container1.lastElementChild;
    }
    next.classList.remove(["next1"]);
    // below mf gives serious bugs, do not touch
    // next.classList.add("active1");
    return;
  }
  active.classList.add("last1");
  last.classList.add("next1");
  next.classList.add("active1");
};

nextBtn1.addEventListener("click", () => {
  startSlider1();
});

prevBtn1.addEventListener("click", () => {
  startSlider1("prev1");
});

// ====================================================================

// if length is 1 hide buttons
if (networkingData.length === 1) {
  nextBtn2.style.display = "none";
  prevBtn2.style.display = "none";
}

// if length is 2, add copies of slides
let networkingPeople = [...networkingData];
if (networkingData.length === 2) {
  networkingPeople = [...networkingData, ...networkingData];
}

container2.innerHTML = networkingPeople
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next2";
    if (slideIndex === 0) {
      position = "active2";
    }
    if (slideIndex === networkingPeople.length - 1) {
      position = "last2";
    }
    if (networkingData.length <= 1) {
      position = "active2";
    }
    return `<article class="slide2 ${position}">  
<img src=${img} class="img" alt="${name}"/>  
<h4>${name}</h4>  
<p class="title">${job}</p>  
<p class="text">  
${text}  
</p>  
</article>`;
  })
  .join("");

const startSlider2 = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active2");
  const last = document.querySelector(".last2");
  let next = active.nextElementSibling;
  if (!next) {
    next = container2.firstElementChild;
  }
  active.classList.remove(["active2"]);
  last.classList.remove(["last2"]);
  next.classList.remove(["next2"]);
  if (type === "prev2") {
    active.classList.add("next2");
    last.classList.add("active2");
    next.classList.add("last2");
    next = last.previousElementSibling;
    if (!next) {
      next = container2.lastElementChild;
    }
    next.classList.remove(["next2"]);
    // below mf gives serious bugs, do not touch
    // next.classList.add("active1");
    return;
  }
  active.classList.add("last2");
  last.classList.add("next2");
  next.classList.add("active2");
};

nextBtn2.addEventListener("click", () => {
  startSlider2();
});

prevBtn2.addEventListener("click", () => {
  startSlider2("prev2");
});
