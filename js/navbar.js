window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(!navbar.classList.contains('high-contrast')) {
        navbar.classList.toggle('sticky', window.scrollY > 0);
    }
});