$(document).ready(function () {
    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    });
});

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 1500,
	delay: 100,
})
sr.reveal(`.btn, .ms-4`)
sr.reveal(`.home-data`, { origin: 'bottom' })
sr.reveal(`.milestone`, { origin: 'left' })
sr.reveal(`.about-img`, { origin: 'right' })
sr.reveal(`.menu-card, .button`,{interval: 100})