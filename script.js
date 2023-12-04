const sec = document.getElementById("sec");
const nav = document.getElementById("navigation");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");
const sec4 = document.getElementById("sec4");
const sec5 = document.getElementById("sec5");
const togCont = document.getElementById("toggle-container");
const tog = document.getElementById("toggle");

function toggle() {
  sec.classList.toggle("active");
  nav.classList.toggle("active");
  sec2.classList.toggle("active");
  sec3.classList.toggle("active");
  sec4.classList.toggle("active");
  sec5.classList.toggle("active");
  togCont.classList.toggle("active");
}

document.onclick = function (e) {
  if (e.target.id !== "navigation" && e.target.id !== "toggle") {
    sec.classList.remove("active");
    sec2.classList.remove("active");
    sec3.classList.remove("active");
    sec4.classList.remove("active");
    sec5.classList.remove("active");
    togCont.classList.remove("active");
    nav.classList.remove("active");
  }
};

function exec(idCard) {
  switch (idCard) {
    case "cardPortfolio1":
      window.open("https://fsalviati.github.io/portfolio_page/");
      break;
    case "cardPortfolio2":
      window.open("https://fsalviati.github.io/Candy_Museum/");
      break;
    case "cardPortfolio3":
      window.open("https://fsalviati.github.io/Pig_Game/");
      break;
    case "cardPortfolio4":
      window.open("https://fsalviati.github.io/To-do_list/");
      break;
    case "cardPortfolio5":
      window.open("https://fsalviati.github.io/Budget_app_controller/");
      break;
    case "cardPortfolio6":
      window.open("https://calculator-html-sass-js.vercel.app/");
      break;
    case "cardPortfolio7":
      window.open("https://fsalviati.github.io/Testimonials_Page/");
      break;
    case "cardPortfolio8":
      window.open("https://pinterest-based-ui-clone.vercel.app/");
      break;
  }
}

// Scroll section / button functionality
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
