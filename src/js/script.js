window.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.tabs__item');
    const prev = document.querySelector('.slider-prev');
    const next = document.querySelector('.slider-next');
    const slidesWrapper = document.querySelector('.slider-items');
    const slidesField = document.querySelector('.slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;
    let timer;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    dots.forEach(dot => dot.style.background = '#EFF8F7');
    dots[slideIndex - 1].style.background = '#D9EFEC';

    function prevAr() {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        dots.forEach(dot => dot.style.background = '#EFF8F7');
        dots[slideIndex - 1].style.background = '#D9EFEC';
    }

    prev.addEventListener('click', () => {
        prevAr();
    });

    function nextAr() {
        if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        autoSlider();

        dots.forEach(dot => dot.style.background = '#EFF8F7');
        dots[slideIndex - 1].style.background = '#D9EFEC';
    }

    next.addEventListener('click', () => {
        nextAr();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.currentTarget.getAttribute('slide');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.style.background = '#EFF8F7');
            dots[slideIndex - 1].style.background = '#D9EFEC';
        });
    });

    autoSlider();
    function autoSlider() {
        timer = setTimeout(nextAr, 3000)
    }
});