function timer() {
    const monday = document.querySelector(".monday");
    const tuesday = document.querySelector(".tuesday");
    const wednesday = document.querySelector(".wednesday");
    const thursday = document.querySelector(".thursday");
    const friday = document.querySelector(".friday");
    const saturday = document.querySelector(".saturday");
    const opening = document.querySelector(".opening");

    let isOpen = false;

    const currDate = new Date(Date.now());
    const currDay = currDate.getDay();
    const currHour = currDate.getHours();

    if (currDay === 0 && (currHour >= 9 && currHour < 18)) {
        isOpen = false;
    } else if (currDay === 1 && (currHour >= 9 && currHour < 18)) {
        isOpen = true;
        monday.classList.add("text-red");
    } else if (currDay === 2 && (currHour >= 9 && currHour < 18)) {
        isOpen = true;
        tuesday.classList.add("text-red");
    }
    else if (currDay === 3 && (currHour >= 9 && currHour < 18)) {
        isOpen = true;
        wednesday.classList.add("text-red");
    }
    else if (currDay === 4 && (currHour >= 9 && currHour < 21)) {
        isOpen = true;
        thursday.classList.add("text-red");
    }
    else if (currDay === 5 && (currHour >= 9 && currHour < 18)) {
        isOpen = true;
        friday.classList.add("text-red");
    }
    else if (currDay === 6 && (currHour >= 9 && currHour < 18)) {
        isOpen = true;
        saturday.classList.add("text-red");
    }

    isOpen ? opening.textContent = "Store is currently open" : opening.textContent = "Store is currently closed";
}