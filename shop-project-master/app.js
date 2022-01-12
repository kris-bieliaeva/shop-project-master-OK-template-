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
