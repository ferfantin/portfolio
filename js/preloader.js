const myPreloader = document.querySelector('.preloader');

const fadeOutEffect = () => {
    myPreloader.classList.add("preloader-fadeout")
};

window.addEventListener('load', fadeOutEffect);