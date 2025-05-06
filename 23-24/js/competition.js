// DOM Elements
const btnSubmit = document.querySelector(".btn-submit");
const q1Answer = document.querySelector("#koalas");
const q2Answer = document.querySelector("#purple");

let numOfCorrectAnswers = 0;

// Submit handler
btnSubmit.addEventListener("click", () => {
    if (q1Answer.checked && q2Answer.checked) numOfCorrectAnswers = 2;
    else if (q1Answer.checked || q2Answer.checked) numOfCorrectAnswers = 1;
    else numOfCorrectAnswers = 0;

    alert(`Correct answers:
    Q1: Koalas
    Q2: Purple`);

    if (numOfCorrectAnswers === 2) {
        alert("Well done. You answered both questions correctly. Use the following code to receive a 20% discount whenever you visit the Galway Zoo: GZ20");
    } else if (numOfCorrectAnswers === 1) {
        alert("You have answered one question correctly.  Use the following code to receive a 10% discount whenever you visit the Galway Zoo: GZ10");
    } else {
        alert("You have no correct answers. Use the following code to receive a 5% discount whenever you visit the Galway Zoo: GZ05");
    }
});