const emailInput = document.getElementById("email");
const errorIcon = document.getElementById("error-icon");
const errorText = document.getElementById("error-text");
const form = document.querySelector(".coming-soon__form");

form.addEventListener("click", (e) => {
    e.preventDefault();
    if (!emailInput.checkValidity()) {
        emailInput.classList.add("coming-soon__input--error");
        errorIcon.hidden = false;
        errorText.hidden = false;
    } else {
        emailInput.classList.remove("coming-soon__input--error");
        errorIcon.hidden = true;
        errorText.hidden = true;

        console.log(`User Email: ${emailInput.value}`);
        form.reset();
    }
});
