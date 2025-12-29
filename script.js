const menu = ["Martabak Coklat", "Martabak Keju", "Pancake"];

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};

setInterval(() => {
  plusSlides(1);
}, 4000);

const price = document.querySelectorAll(".price");
const martabakCoklat = 20000;
const martabakKeju = 22000;
const pancake = 15000;

price[0].textContent = "Rp. " + martabakCoklat;
price[1].textContent = "Rp. " + martabakKeju;
price[2].textContent = "Rp. " + pancake;

const cart = document.querySelector(".cart");

function sumPrice(el) {
  const id = Number(el.dataset.id);
  cart.textContent = "halo, aku adalah " + menu[id];
}
