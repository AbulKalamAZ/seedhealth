// Registering scrolltrigger
gsap.registerPlugin(ScrollTrigger);

// Variables
const paths = document.querySelectorAll('path');

const tree = document.querySelector('.tree');
const leftCol = document.querySelector('.left-col');
const rightCol = document.querySelector('.right-col');
const bannerTitle = document.querySelector('.banner-title');
const biomeIMG = document.querySelector('.biome-img');

// Hiding images on load

tree.style.opacity = 1;
leftCol.style.opacity = 1;
rightCol.style.opacity = 1;
biomeIMG.style.opacity = 1;

// Let's get our hands dirty

const timeline = gsap.timeline({ defaults: { duration: 0.7 } });

timeline
    .to('.banner-title', { y: 0, opacity: 1 })
    .from('.biome-img', { y: 100, opacity: 0 }, '<.7')
    .from('path', {
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
    })
    .to('.biome', {
        scrollTrigger: {
            trigger: '.anim-container',
            pin: true,
            scrub: true,
        },
        opacity: 0,
    })
    .from('.left-col', {
        scrollTrigger: {
            trigger: '.anim-container',
            start: 'top 10%',
            // pin: true,
            // markers: true,
            scrub: true,
        },
        ease: 'power1.out',
        opacity: 0,
        y: 100,
    })
    .from(
        '.right-col',
        {
            scrollTrigger: {
                trigger: '.left-col',
                // pin: true,
                start: 'top 10%',
                // markers: true,
                scrub: true,
            },
            ease: 'power1.out',
            opacity: 0,
            y: 100,
        },
        '<.5'
    );
