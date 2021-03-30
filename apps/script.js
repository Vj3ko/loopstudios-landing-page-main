const openBtn = document.querySelector("#menu-btn-open");
const closeBtn = document.querySelector("#menu-btn-close");
const menu = document.querySelector(".header__navbar");
const body = document.querySelector("#body");
const menuItems = document.querySelectorAll(".toggle");

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);



menuItems.forEach(item => {
      item.addEventListener("click", closeMenu);
});


function openMenu() {
      menu.classList.add("show");
      body.style.overflow = "hidden";
}

function closeMenu() {
      menu.classList.remove("show");
      body.style.overflowY = "auto";
      body.style.overflowX = "hidden";
}
