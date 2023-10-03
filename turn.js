const button = document.querySelector("#btn")
var click = 0;
button.addEventListener('click', changeToButton);
function changeToButton() {
    if (click === 0) {
        button.textContent = "Turn on"
        const img = document.querySelector("#image")
        img.setAttribute("src", "bulb-on.png")
        button.style.backgroundColor = "green";
        click = 1
    }
    else {
        button.textContent = "Turn off"
        button.style.backgroundColor = "white";
        const img = document.querySelector("#image")
        img.setAttribute("src", "bulb-off.png")
        click = 0
    }
}

