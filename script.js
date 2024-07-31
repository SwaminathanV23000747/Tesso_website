let counter = 0;
const products = document.querySelectorAll('.product');
const totalVisible = 3; // Number of visible products at once

function left() {
    if (counter === 0) {
        counter = Math.floor(products.length / totalVisible) - 1;
    } else {
        counter--;
    }
    scroll();
}

function right() {
    if (counter === Math.floor(products.length / totalVisible) - 1) {
        counter = 0;
    } else {
        counter++;
    }
    scroll();
}

function scroll() {
    products.forEach(function (item) {
        item.style.transform = `translateX(-${counter * (products[0].offsetWidth + 40)}px)`; // Added 40px for margin
    });
}

document.querySelector('.left').addEventListener('click', left);
document.querySelector('.right').addEventListener('click', right);


document.querySelector('.left2').addEventListener('click', left);
document.querySelector('.right2').addEventListener('click', right);


document.querySelector('.left3').addEventListener('click', left);
document.querySelector('.right3').addEventListener('click', right);


document.querySelector('.left4').addEventListener('click', left);
document.querySelector('.right4').addEventListener('click', right);


document.querySelector('.left5').addEventListener('click', left);
document.querySelector('.right5').addEventListener('click', right);

document.querySelector('.left6').addEventListener('click', left);
document.querySelector('.right6').addEventListener('click', right);

