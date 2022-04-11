window.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.tabs__item');
    const prev = document.querySelector('.slider-prev');
    const next = document.querySelector('.slider-next');
    let slideIndex = 1;

    showSlides(slideIndex);


    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        dots.forEach(dot => dot.style.background = '#EFF8F7');
        dots[slideIndex - 1].style.background = '#D9EFEC';
        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
        dots.forEach(dot => dot.style.background = '#EFF8F7');
        dots[slideIndex - 1].style.background = '#D9EFEC';
    });

    next.addEventListener('click', function () {
        plusSlides(1);
        dots.forEach(dot => dot.style.background = '#EFF8F7');
        dots[slideIndex - 1].style.background = '#D9EFEC';
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.currentTarget.getAttribute('slide');
            slideIndex = slideTo;
            showSlides(slideIndex);
            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex - 1].style.opacity = 1;
        });
    });
});
