"use strict";

document.addEventListener('DOMContentLoaded', () => {


    const header = document.querySelector('.header');
    let introH;  //750px
    document.addEventListener('scroll', (e) => {
        e.preventDefault();
        introH = document.querySelector('.intro').scrollHeight; 
        if (window.pageYOffset > introH) {
            header.classList.add('header__fixed');
        } else {
            header.classList.remove('header__fixed');
        }
    });

    


    const anchors = document.querySelectorAll('a[data-scroll]');    

    const burgerMenu = document.querySelector('.burger');
    let nav = document.querySelector('.nav');

    anchors.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = item.getAttribute('href');
            nav.classList.remove('show'); 
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: 'start'
            });
        });
    });

    //Для телефонов
    burgerMenu.addEventListener('click', (e) => {   
        e.preventDefault();

        nav.classList.toggle('show');  //Переключатель добавляет класс и убирает
    });




    //Слайдер
    const slides = document.querySelectorAll('.reviews__item');
    const btns = document.querySelectorAll('.sliderBtn');
    const prev = btns[0]; 
    const next = btns[1]; 
    let sliderIndex = 1;

    showSlides(sliderIndex);

    function showSlides(n) {
        if (n > slides.length) {
            sliderIndex = 1;
        }
        if (n<1) {
            sliderIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        slides[sliderIndex-1].style.display = '';
    }

    function plusSlides(n) {
        showSlides(sliderIndex += n);
    }
    prev.addEventListener('click', ()=> {
        plusSlides(-1);
    });
    next.addEventListener('click', ()=> {
        plusSlides(1);
    });

});


