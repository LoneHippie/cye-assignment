const DOM = {
    slider: document.getElementById('slider'),
    heroCTA: document.getElementById('hero-cta'),
    statNum1: document.getElementById('stat-num-1'),
    statNum2: document.getElementById('stat-num-2'),
    statCard1: document.getElementById('stat-card-1'),
    statCard2: document.getElementById('stat-card-2'),
    statCard3: document.getElementById('stat-card-3')
};

const onScreenObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target)
        }
    })
}, { root: null, rootMargin: '-10px' });

//set observers to trigger animations on view
onScreenObserver.observe(DOM.heroCTA);
onScreenObserver.observe(DOM.statNum1);
onScreenObserver.observe(DOM.statNum2);
onScreenObserver.observe(DOM.statCard1);
onScreenObserver.observe(DOM.statCard2);
onScreenObserver.observe(DOM.statCard3);

//on load set scroll position
DOM.slider.scrollLeft = 150;