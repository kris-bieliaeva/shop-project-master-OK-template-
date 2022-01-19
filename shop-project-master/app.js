// add to cart
const productCountEl = document.getElementById("products-count");
const addtoCartBtns = document.querySelectorAll(".btn-card");

for (let i = 0; i < addtoCartBtns.length; i++) {
  addtoCartBtns[i].addEventListener("click", function () {
    productCountEl.textContent = +productCountEl.textContent + 1;
  });
}

//change like btn state
const likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }

    item.classList.toggle("liked");
  });
});

//modal
const moreDetailsBtns = document.querySelectorAll(".btn-details");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".btn-close");

function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

modalCloseBtn.addEventListener("click", closeModal);

//show modal on 50% page height
function showModalByScroll() {
  if (window.pageYOffset >= document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

//scroll animation
// AOS.init();

// +/- in product
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");
let minCount = 1;
let maxCount = 5;

for (let i = 0; i < quantityInput.length; i++) {
  let currentValue = +quantityInput[i].value;
  toggleButtonState(currentValue, incrementBtns[i], decrementBtns[i]);
}

function toggleButtonState(count, incrementBtn, decrementBtn) {
  decrementBtn.disabled = count <= minCount;
  incrementBtn.disabled = count >= maxCount;
}

for (let i = 0; i < incrementBtns.length; i++) {
  incrementBtns[i].addEventListener("click", function () {
    let currentValue = +quantityInput[i].value;
    let nextValue = currentValue + 1;
    quantityInput[i].value = nextValue;

    toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
  });
}

for (let i = 0; i < decrementBtns.length; i++) {
  decrementBtns[i].addEventListener("click", function () {
    let currentValue = +quantityInput[i].value;
    let nextValue = currentValue - 1;
    quantityInput[i].value = nextValue;

    toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
  });
}
