const elements = document.querySelectorAll('.fade-in')

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        })
    }, { threshold: 0.1 }
);

elements.forEach(el => observer.observe(el));