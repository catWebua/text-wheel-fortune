function promiseAfterTimeout(seconds) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), seconds*1000);
    });
}

function rotateWheel(degr) {
    let wheel = document.querySelector('.wheel');
    wheel.style.transform = 'rotate('+degr+'deg)';
    return promiseAfterTimeout(3);
}

function randomDegrees() {
    let randomFloat = Math.random()*360;
    let descreetDegrees = Math.round(randomFloat / 60) * 60;
    return descreetDegrees;
}

function getCurrentColor(currentDegrees) {
    let colors = ["yellow", "blue", "red", "salmon", "blueviolet", "green"];
    let segmentCount = parseInt(currentDegrees/60);
    let segmentShift = segmentCount % colors.length;

    return colors[segmentShift];
}

function launchSpin() {
    currentRotation += randomDegrees();

    rotateWheel(currentRotation)
        .then(() => {
            let winColor = getCurrentColor(currentRotation);
            let popup = document.querySelector('.popup');
            let bodyBg = document.querySelector('.popupbg');
            popup.style.backgroundColor = winColor;
            bodyBg.style.display = "block";
            function popupShow() {
                let x = document.getElementById("popup");
                if (x.style.display === "none") {
                    x.style.display = "flex";
                } else {
                    x.style.display = "flex";
                }
            }
            popupShow()
        });
}

let currentRotation = 0;
let spinButton = document.querySelector('.spin');
let spinButton2 = document.querySelector('.spin2');
spinButton.addEventListener('click', launchSpin);
spinButton2.addEventListener('click', launchSpin);


document.querySelector('.close').addEventListener("click", closePopup);

function closePopup() {
    let popupbg = document.querySelector('.popupbg');
    document.getElementsByClassName('popup')[0].style.display='none';
    popupbg.style.display = "none";
}

