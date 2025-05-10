const totalCost = document.querySelector("#totalCost");
const promoCodeEl = document.querySelector("#promoCode");
const deliveryCheckbox = document.querySelector("#fastDelivery");

totalCost.value = sessionStorage.total;

function checkPromoCode() {
    const promoCode = promoCodeEl.value;

    if (promoCode === "nike23") {
        totalCost.value = Number(totalCost.value) - (Number(totalCost.value) / 10);
    }
}

function checkDelivery() {
    if (deliveryCheckbox.checked) {
        totalCost.value = Number(totalCost.value) + 3;
    } else {
        totalCost.value = Number(totalCost.value) - 3;
    }
}

function validateForm() {
    const email = document.querySelector("#email").value;
    const address = document.querySelector("#address").value;
    const username = document.querySelector("#name").value;
    const creditCard = document.querySelector("#card").value;

    if (!email || !address || !username || !creditCard) {
        alert("All fields are required");
    }
}