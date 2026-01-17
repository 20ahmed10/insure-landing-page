const humMenu = document.querySelector(".humMneu");
const xMark = document.querySelector(".x-mark");
const bars = document.querySelector(".bars");
const listItems = document.querySelector("#navbar nav ul ");
humMenu.addEventListener("click", function () {
   xMark.classList.toggle("active");
   bars.classList.toggle("active");
   listItems.classList.toggle("active");

   
} )