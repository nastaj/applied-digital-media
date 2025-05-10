const qty1 = document.querySelector("#nike-x");
const qty2 = document.querySelector("#nike-night");
const qty3 = document.querySelector("#nike-speed");
const qty4 = document.querySelector("#nike-zoom");


function add(product) {
    if (product === 1) {
        sessionStorage.qty1 = qty1.value;
    } else if (product === 2) {
        sessionStorage.qty2 = qty2.value;
    } else if (product === 3) {
        sessionStorage.qty3 = qty3.value;
    } else {
        sessionStorage.qty4 = qty4.value;
    }

    alert("Item added to the cart!");
}