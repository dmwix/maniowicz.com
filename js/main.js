'use strict';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function openNav() {
  document.getElementById("fullscreen-menu").style.display = "block";
}

const openMenu = document.getElementById('open-menu');
openMenu.addEventListener('click', openNav);

function closeNav() {
  document.getElementById("fullscreen-menu").style.display = "none";
}

const closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', closeNav);  

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

let currentUrl = window.location.pathname;

let navLinks = document.querySelectorAll('desktop-menu nav a');
navLinks.forEach(link => {
  if(link.href.includes(`${currentUrl}`)) {
    link.closest('li').classList.add('current-menu-item');
  };
})