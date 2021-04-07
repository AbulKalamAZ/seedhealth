document.querySelector('.tree').style.opacity = 1;

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    defaults: { duration: 1, ease: Back.easeOut.config(2), opacity: 0 },
});

// tl.to('.tree', {
//     scrollTrigger: {
//         trigger: '.anim-container',
//         pin: true,
//         // markers: true,
//         scrub: true,
//     },
// });

tl.from('path', {
    opacity: 0,
    stagger: {
        each: 0.05,
        from: 'edges',
        grid: 'auto',
    },
    scrollTrigger: {
        trigger: '.anim-container',
        pin: true,
        // markers: true,
        scrub: true,
    },
});

tl.from('.biome', 2, {
    scrollTrigger: {
        trigger: '.anim-container',
        pin: true,
        // markers: true,
        scrub: true,
    },
    opacity: 1,
});