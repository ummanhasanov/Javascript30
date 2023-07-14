const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const electronic = document.querySelector('.electronic');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();

    const secondDegrees = ((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360 + 90);
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    electronic.innerHTML = `${hour}:${minutes}:${seconds}`;

}
setInterval(setDate, 1000);