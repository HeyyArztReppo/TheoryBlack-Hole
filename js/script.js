// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk Search Form
const SearchFrom = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  SearchFrom.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !SearchFrom.contains(e.target)) {
    SearchFrom.classList.remove("active");
  }
});

// Detail Box
const itemdetail = document.querySelector("#item-detail");
const ctaButton = document.querySelectorAll(".cta-button");

ctaButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemdetail.style.display = "flex";
    e.preventDefault();
  };
});

// Click Tombol Close
document.querySelector(".detail .close-icon").onclick = (e) => {
  itemdetail.style.display = "none";
  e.preventDefault();
};

// Klik di luar detail
window.onclick = (e) => {
  if (e.target === itemdetail) {
    itemdetail.style.display = "none";
  }
};
