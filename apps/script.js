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
      body.style.overflowY = "hidden";
      trapFocus(menu);
}

function closeMenu() {
      menu.classList.remove("show");
      body.style.overflowY = "initial";

}

let focusableEls = menu.querySelectorAll('a[href]:not([disabled]), button:not([disabled])');
let firstFocusableEl = focusableEls[1];
let lastFocusableEl = focusableEls[focusableEls.length - 1];

function trapFocus(element) {
      element.addEventListener('keydown', function (e) {
            const isTabPressed = e => e.key === 'Tab' || e.keyCode === 9;

            if (!isTabPressed) {
                  return;
            }

            if (e.shiftKey) /* shift + tab */ {
                  if (document.activeElement === firstFocusableEl) {
                        lastFocusableEl.focus();
                        e.preventDefault();
                  }
            } else /* tab */ {
                  if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus();
                        e.preventDefault();
                  }
            }
      });
}
