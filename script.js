"use strict";

const dropdown = document.querySelector(".dropdown");
const trigger = document.querySelector(".dropdown__trigger");

trigger.addEventListener("contextmenu", (event) => {
  event.preventDefault();


  dropdown.classList.toggle('dropdown--active');
  // if (dropdown.classList.contains("dropdown--active")) {
  //   dropdown.classList.remove("dropdown--active");
  // } else {
  //   dropdown.classList.add("dropdown--active");
  // }
});
