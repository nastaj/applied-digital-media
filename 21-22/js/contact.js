function validateForm() {
    const firstName = document.querySelector("#fname").value;
    const lastName = document.querySelector("#sname").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (!firstName) {
        alert("First name field is required");
        return;
    }

    if (!lastName) {
        alert("Surname field is required");
        return;
    }

    if (!email) {
        alert("Email field is required");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert(`Email address must include an "@" symbol and a full stop "."`);
        return;
    }

    if (!message) {
        alert("Message field is required");
        return;
    }

    alert("Message was sent. A member of staff will respond soon.");
}