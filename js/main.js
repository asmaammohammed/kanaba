// ANIMATION
const elements = document.querySelectorAll('.animate__animated'); 

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 }); 

elements.forEach(element => {
    observer.observe(element);
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate__animated');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const elementBottom = rect.bottom + scrollY;

            if (elementTop < scrollY + windowHeight && elementBottom > scrollY) {
                element.classList.add('is-visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
