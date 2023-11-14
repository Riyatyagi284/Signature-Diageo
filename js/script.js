$(function () {
  var owl = $(".first-carousel .owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 30,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

$(function () {
  var owl = $(".tab-container .owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// =================== On Click video JS ==========================

const video = document.querySelector("#sixth-section video");
const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", () => {
  video.classList.remove("d-none");
  playBtn.classList.add("d-none");
});

// ============== Adding Fade Right Effect on selecting the tab on carousel ===============

const TabBtn = document.querySelectorAll(".tab-button");
const Tabs = document.querySelectorAll(".tab-pane");

TabBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    Tabs.forEach((tab) => {
      if (!tab.classList.contains("active")) {
        tab.classList.remove("fadeinright");
      } else tab.classList.add("fadeinright");
    });
  });
});

// ================= Sidebar JS =========================

const menu = document.querySelector("#menu");
const sideBar = document.querySelector(".sidebar");
const close = document.querySelector("#close");

menu.addEventListener("click", () => {
  sideBar.style.left = 0;
});

close.addEventListener("click", () => {
  sideBar.style.left = "-100%";
});

// ================== Fade Out Item ====================

window.addEventListener("scroll", () => {
  const tenthSect = document.querySelector("#tenth-section");
  const RemoveEffect = document.querySelectorAll(".remove-effect");

  if (tenthSect.getBoundingClientRect().top < -400) {
    RemoveEffect.forEach((item) => {
      item.classList.add("fadeOutUpBig");
    });
  } else {
    RemoveEffect.forEach((item) => {
      item.classList.remove("fadeOutUpBig");
    });
  }
});

// ===================== Sticky Navbar =====================

const header = document.querySelector("#header-section");
const ul = document.querySelector("#header-section ul");
const logo = document.querySelector(".logo");
const line = document.querySelector(".line-3");
const logoImg = document.querySelector(".logo > img");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;

  if (scrollValue > 1) {
    header.classList.add("sticky");
    logo.classList.add("onscroll-logo");
    line.style.display = "none";
    logo.style.setProperty("--remove", "none");
    ul.classList.add("onscroll-ul");
    header.classList.add("onscroll-header");
    menu.classList.add("onscroll-menu");
  } 

  else {
    header.classList.remove("sticky");
    logo.classList.remove("onscroll-logo");
    line.style.display = "block";
    logo.style.setProperty("--remove", "block");
    ul.classList.remove("onscroll-ul");
    header.classList.remove("onscroll-header");
    menu.classList.remove("onscroll-menu");
  }

});
