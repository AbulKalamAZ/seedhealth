// Registering scrolltrigger
gsap.registerPlugin(ScrollTrigger);

// Variables
const paths = document.querySelectorAll('path');

const tree = document.querySelector('.tree');
const leftCol = document.querySelector('.left-col');
const rightCol = document.querySelector('.right-col');

// Hiding images on load

tree.style.opacity = 1;
leftCol.style.opacity = 1;
rightCol.style.opacity = 1;

const tl = gsap.timeline({
    defaults: { duration: 1, ease: Back.easeOut.config(2), opacity: 0 },
});

tl.from('path', {
    opacity: 0,
    stagger: {
        each: 0.5,
        from: 'center',
        grid: 'auto',
    },
    scrollTrigger: {
        trigger: '.anim-container',
        pin: true,
        // markers: true,
        scrub: true,
    },
});

tl.from('.biome', {
    scrollTrigger: {
        trigger: '.anim-container',
        pin: true,
        scrub: true,
    },
    opacity: 1,
});

tl.from('.left-col', {
    scrollTrigger: {
        trigger: '.anim-container',
        pin: true,
        // markers: true,
        scrub: true,
    },
    ease: 'power1.out',
    opacity: 0,
    y: 200,
});

if (window.innerWidth < 376) {
    tl.from('.right-col', {
        scrollTrigger: {
            trigger: '.anim-container',
            pin: true,
            // markers: true,
            scrub: true,
        },
        ease: 'power1.out',
        opacity: 0,
        y: 200,
    });
}
