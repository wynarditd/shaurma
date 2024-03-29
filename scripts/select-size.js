





document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".products__product");

    products.forEach(product => {
        const buttons = product.querySelectorAll(".size-select__button");
        const price = product.querySelector(".product__price");

        buttons.forEach(button => {
            button.addEventListener("click", function() {
                buttons.forEach(btn => btn.classList.remove("button__selected"));
                this.classList.add("button__selected");
            });
        });
    });
});