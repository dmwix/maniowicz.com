"use strict";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function openNav() {
  document.getElementById("fullscreen-menu").style.display = "block";
}

const openMenu = document.getElementById("open-menu");
openMenu.addEventListener("click", openNav);

function closeNav() {
  document.getElementById("fullscreen-menu").style.display = "none";
}

const closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click", closeNav);

let acc = document.querySelectorAll(".accordion");
acc.forEach((item) => {
  item.addEventListener("click", function () {
    let panel = this.nextElementSibling;
    let isOpen = panel.style.maxHeight ? true : false;

    acc.forEach((a) => {
      a.classList.remove("active");
      a.nextElementSibling.style.maxHeight = null;
    });

    if (!isOpen) {
      this.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

let currentUrl = window.location.pathname;

let navLinks = document.querySelectorAll(".desktop-menu ul a");
navLinks.forEach((link) => {
  if (link.href.includes(`${currentUrl}`)) {
    link.closest("li").classList.add("current-menu-item");
  }
});
