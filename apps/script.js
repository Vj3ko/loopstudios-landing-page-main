const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("#body");
const linkItems = document.querySelectorAll(".toggle");

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

linkItems.forEach(item => {
      item.addEventListener("click", closeMenu);
});


function openMenu() {
      menu.classList.add("show")
      body.style.overflow = "hidden";
}

function closeMenu() {
      menu.classList.remove("show")
      body.style.overflowX = "hidden";
      body.style.overflowY = "auto";
}
