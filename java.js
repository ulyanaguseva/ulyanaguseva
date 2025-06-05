let slideIndex = 1;
let slideInterval;


showSlides(slideIndex);
startSlider();

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {

    var slides = document.getElementsByClassName("mySlides");
    var bullets = document.getElementsByClassName("bullet");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace(" current", "");
    }


    slides[slideIndex - 1].style.display = "block";
    bullets[slideIndex - 1].className += " current"
}

function startSlider() {
    slideInterval = setInterval(() => {
        plusSlide();
    }, 6000);
}