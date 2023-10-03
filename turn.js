const button = document.querySelector("#btn")
var text = 0;
button.addEventListener('click', changeToButton);
function changeToButton() {
    if (text === 0) {
        button.textContent = "Turn on"
        button.style.backgroundColor = "green";
        text = 1
    }
    else {
        button.textContent = "Turn off"
        button.style.backgroundColor = "white";
        text = 0
    }
}
