const contrastButton = document.querySelector(".toggle-high-contrast");

contrastButton.addEventListener("click", () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('high-contrast');
    navbar.classList.remove('sticky');
    document.querySelectorAll('.navlink').forEach(navlink => {
        navlink.classList.toggle('high-contrast');
    });
    document.querySelector('.logo').classList.toggle('high-contrast');

    document.querySelector('.logo').classList.toggle('high-contrast');
    document.querySelector('.page-title').classList.toggle('high-contrast');
    document.querySelector('.page-subtitle').classList.toggle('high-contrast');
    document.querySelector('.course-info-container').classList.toggle('high-contrast');
    document.querySelector('.main').classList.toggle('high-contrast');
    document.querySelectorAll('.date-box').forEach(element => {
        element.classList.toggle('high-contrast');
    });
    document.querySelectorAll('.title-box').forEach(element => {
        element.classList.toggle('high-contrast');
    });
    document.querySelector('.aboutus').classList.toggle('high-contrast');
    document.querySelector('.join-us-button').classList.toggle('high-contrast');
    document.querySelector('.our-crew-info').classList.toggle('high-contrast');
    document.querySelectorAll('.crew-about-box').forEach(element => {
        element.classList.toggle('high-contrast');
    });
    document.querySelectorAll('.sub-title').forEach(element => {
        element.classList.toggle('high-contrast');
    });
    document.querySelectorAll('.review-box').forEach(element => {
        element.classList.toggle('high-contrast');
    });
    document.querySelector('.contact-box').classList.toggle('high-contrast');
    document.querySelector('.contact-form-box').classList.toggle('high-contrast');
    document.querySelector('.location-info').classList.toggle('high-contrast');
    document.querySelectorAll('.address-info').forEach(element => {
        element.classList.toggle('high-contrast');
    });
    document.querySelector('.footer').classList.toggle('high-contrast');
    document.querySelectorAll('.media-link').forEach(element => {
        element.classList.toggle('high-contrast');
    });
    document.querySelector('.lets-talk-button').classList.toggle('high-contrast');
    document.querySelectorAll('.contact-input').forEach(element => {
        element.classList.toggle('high-contrast');
    });
    document.querySelector('#submit').classList.toggle('high-contrast');
});