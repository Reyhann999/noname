// menu dan harganya
const menu = {
  "Martabak Coklat":20000,
  "Martabak Keju":22000,
  "Pancake":15000
};

// dibuat array
const menuItem = Object.keys(menu);
const menuPrice = Object.values(menu);

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
const item = document.querySelectorAll(".item");
for (let i = 0; i < item.length; i++) {
  item[i].textContent = menuItem[i];
  price[i].textContent = menuPrice[i];
}


const cart = document.querySelector(".cart");
const cartBody = document.querySelector(".cart-body");
const total = document.querySelector(".total");

let pTotal = 0;
const cartMenu = document.querySelectorAll(".items");

function sumPrice(el) {
  const id = Number(el.dataset.id);

  // cegah dobel
  if (cartBody.querySelector(`[data-id="${id}"]`)) return;
  
  areAllCheckboxChecked("cart-item");
  cartBody.insertAdjacentHTML(
    'beforeend',
    `
    <label>
      <input class="cart-item" type="checkbox" data-id="${id}" checked>
      ${menuItem[id]}
    </label>
    `
  );
  cartBody.addEventListener('change', e => {
  if (!e.target.classList.contains('cart-item')) return;
  hitungUlangTotal();
  areAllCheckboxChecked("cart-item");
});
  hitungUlangTotal();
}

function hitungUlangTotal() {
  let totalBaru = 0;

  document.querySelectorAll('.cart-item').forEach(item => {
    if (item.checked) {
      totalBaru += menuPrice[item.dataset.id];
    }
  });

  pTotal = totalBaru;
  total.textContent = pTotal;
}

function expandCart() {
  const triangle = document.querySelector(".triangle-down");
  triangle.classList.toggle("expanded");
  if (triangle.classList.contains("expanded")) {
    cartBody.style.display = "flex";
  } else {
    cartBody.style.display = "none"
  }
}

function areAllCheckboxChecked(classname) {
  const checkboxes = document.querySelectorAll(`input[type="checkbox"].${classname}`);
  const allChecked = Array.from(checkboxes).every(checkbox => {
    return checkbox.checked;
  })
  
  const semuaItem = document.querySelector("#semua-item");
  if (allChecked) {
    semuaItem.checked = true;
  } else {
    semuaItem.checked = false;
  }
    
    
  return allChecked;
}