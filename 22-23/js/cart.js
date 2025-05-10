const qty1 = document.querySelector(".qty1");
const qty2 = document.querySelector(".qty2");
const qty3 = document.querySelector(".qty3");
const qty4 = document.querySelector(".qty4");

const qty1TotalEl = document.querySelector(".qty1-total");
const qty2TotalEl = document.querySelector(".qty2-total");
const qty3TotalEl = document.querySelector(".qty3-total");
const qty4TotalEl = document.querySelector(".qty4-total");

const totalEl = document.querySelector(".total");

let qty1TotalVal = 0;
let qty2TotalVal = 0;
let qty3TotalVal = 0;
let qty4TotalVal = 0;

let total = 0;

function cart() {
    qty1.textContent = sessionStorage.qty1 ? sessionStorage.qty1 : 0;
    qty2.textContent = sessionStorage.qty2 ? sessionStorage.qty2 : 0;
    qty3.textContent = sessionStorage.qty3 ? sessionStorage.qty3 : 0;
    qty4.textContent = sessionStorage.qty4 ? sessionStorage.qty4 : 0;

    qty1TotalVal = sessionStorage.qty1 ? sessionStorage.qty1 * 100 : 0;
    qty2TotalVal = sessionStorage.qty2 ? sessionStorage.qty2 * 150 : 0;
    qty3TotalVal = sessionStorage.qty3 ? sessionStorage.qty3 * 180 : 0;
    qty4TotalVal = sessionStorage.qty4 ? sessionStorage.qty4 * 80 : 0;

    qty1TotalEl.textContent = qty1TotalVal;
    qty2TotalEl.textContent = qty2TotalVal;
    qty3TotalEl.textContent = qty3TotalVal;
    qty4TotalEl.textContent = qty4TotalVal;

    total = qty1TotalVal + qty2TotalVal + qty3TotalVal + qty4TotalVal;

    totalEl.textContent = total;

    sessionStorage.total = total;
}