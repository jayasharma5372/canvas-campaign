const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header-menu .menu");
const rightMenu = document.querySelector(".header-menu .right-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    rightMenu.classList.toggle("active");
});


var date = new Date();
var year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;