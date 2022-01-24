const DOM = {
    slider: document.getElementById('slider'),
    heroCTA: document.getElementById('hero-cta'),
    statNum1: document.getElementById('stat-num-1'),
    statNum2: document.getElementById('stat-num-2'),
    statCard1: document.getElementById('stat-card-1'),
    statCard2: document.getElementById('stat-card-2'),
    statCard3: document.getElementById('stat-card-3'),

    navToggle: document.getElementById('nav-toggle'),
    navDesktop: document.getElementById('nav-desktop'),
    navMobile: document.getElementById('nav-mobile'),
    mobileMask: document.getElementById('mobile-mask')
};

let windowDimensions;
let isScreenMobile;

function setVisibleNav() {
    if (windowDimensions > 568) { //desktop mode
        DOM.navDesktop.classList.add('active');
        DOM.navMobile.classList.remove('active');
        DOM.navMobile.classList.remove('active');
        return false;
    } else { //mobile mode
        DOM.navDesktop.classList.remove('active');
        DOM.navMobile.classList.remove('active');
        DOM.navMobile.classList.remove('active');
        return true;
    }
}

(function init() {
    //set screen width variable, determine screen type and set appropriate nav
    windowDimensions = window.innerWidth;
    isScreenMobile = setVisibleNav();
    setVisibleNav();

    //on load set scroll position
    DOM.slider.scrollLeft = 150;
})()

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

const toggleMobileMenu = () => {
    if (isScreenMobile) {
        DOM.navMobile.classList.toggle('active');
        DOM.mobileMask.classList.toggle('active');
    }
};

DOM.navToggle.addEventListener('click', toggleMobileMenu);
DOM.mobileMask.addEventListener('click', toggleMobileMenu);