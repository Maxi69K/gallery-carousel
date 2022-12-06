// Background image gallery carousel
const myBody = document.querySelector('body');
const imgs = document.querySelectorAll('.img');
const arrowBtns = document.querySelectorAll('.arrow-btn');
let activeImg = 0;

setImgAsBackground();

function setImgAsBackground() {
    myBody.style.backgroundImage = imgs[activeImg].style.backgroundImage;
}

function activateImgs() {
    imgs.forEach(function (img) {
        img.classList.remove('active');
        img.classList.remove('animateTransition');
    });
    imgs[activeImg].classList.add('active');
    imgs[activeImg].classList.add('animateTransition');
}

arrowBtns.forEach((btn) => {
    btn.onclick = () => {
        if (btn.classList.contains('right-arrow') === true) {
            activeImg++;
            if (activeImg > imgs.length - 1) {
                activeImg = 0;
            }
        } else {
            activeImg--;
            if (activeImg < 0) {
                activeImg = imgs.length - 1;
            }
        }
        setImgAsBackground();
        activateImgs();
    };
});