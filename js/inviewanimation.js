const appear = document.querySelectorAll('.appear'); 
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview');
        } 
    });
});
appear.forEach(a => {
    io.observe(a);
})
