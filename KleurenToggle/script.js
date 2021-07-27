// Function to check if menu is open or close
let toggleNavStatus = false;

let toggleNav = function () {

    let getSidebarUl = document.querySelector(".nav-main ul");
    let getSidebarLinks = document.querySelectorAll(".nav-main a");

    if (toggleNavStatus === false) {

        let arrayLenght = getSidebarLinks.length;
        for (let i = 0; i < arrayLenght; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        getSidebarUl.style.visibility = "visible";
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        let arrayLenght = getSidebarLinks.length;
        for (let i = 0; i < arrayLenght; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}

//Get all elements -declare const
const backgroundBody = document.querySelector(".body");
const burger = document.querySelector("#btn-togle-nav");
const getSidebar = document.querySelector(".nav-main");
const colorText = document.querySelector("h3");
const btnHome = document.querySelector(".btn-home");
const btnRed = document.querySelector(".btn-red");
const btnBlue = document.querySelector(".btn-blue");
const btnYellow = document.querySelector(".btn-yellow");
const btnGreen = document.querySelector(".btn-green");


// using the keyboard buttons from 1 to 5 to chnage the colors in the mneu
// keycode 49 is = 1, keycode 50 is = 2, ect till keycode 53 is = 5
document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 49:
            colorText.innerText = "Home";
            backgroundBody.style.background = "grey";
            break;
        case 50:
            colorText.innerText = "Blue";
            backgroundBody.style.background = "blue";
            break;
        case 51:
            colorText.innerText = "Green";
            backgroundBody.style.background = "green";
            break;
        case 52:
            colorText.innerText = "Yellow";
            backgroundBody.style.background = "yellow";
            break;
        case 53:
            colorText.innerText = "Red";
            backgroundBody.style.background = "red";
            break;
        default: break;
    }
});
//add event listenr to every button/color

btnHome.addEventListener("click", function () {
    colorText.innerText = "Home";
    backgroundBody.style.background = "grey";
    toggleNav();
});

btnRed.addEventListener("click", function () {
    colorText.innerText = "Red";
    backgroundBody.style.background = "red";
    toggleNav();
});

btnBlue.addEventListener("click", function () {
    colorText.innerText = "Blue";
    backgroundBody.style.background = "blue";
    toggleNav();
});

btnGreen.addEventListener("click", function () {
    colorText.innerText = "Green";
    backgroundBody.style.background = "green";
    toggleNav();
});

btnYellow.addEventListener("click", function () {
    colorText.innerText = "Yellow";
    backgroundBody.style.background = "yellow";
    toggleNav();
});

