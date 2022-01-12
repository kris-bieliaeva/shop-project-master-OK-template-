const productCountEl = document.getElementById("products-count");
console.log(productCountEl);

const addtoCartBtns = document.querySelectorAll(".btn-card");
console.log(addtoCartBtns);

for (let i = 0; i < addtoCartBtns.length; i++) {
  addtoCartBtns[i].addEventListener("click", function () {
  productCountEl.textContent = +productCountEl.textContent + 1;
    
  });
}

