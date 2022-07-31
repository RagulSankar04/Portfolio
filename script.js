let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

const typed = document.querySelector(".typed");

if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");

  typed_strings = typed_strings.split(",");

  new Typed(".typed", {
    strings: typed_strings,

    loop: true,

    typeSpeed: 70,

    backSpeed: 50,

    backDelay: 2000,
  });
}

document.getElementById("reveal-btn").onclick = () => {
  document.getElementById("reveal-text").style.display = "block";
  document.getElementById("reveal-btn").style.display = "none";
};
