const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".split-type");
splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: 'chars' });
  gsap.from(text.chars, {
    ScrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub:1,
    },
    opacity: 0.0,
    y:100,
    stagger: 0.05
  });
});
// Animation for the hero section
gsap.from(".dp", {
  opacity: 0,
  y: 100,
  rotation: -45,
  scale: 0.5,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#hero",
    start: "top 50%",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
  },
});

// Animation for the skills section
gsap.from(".scroller", {
  opacity: 0,
  y: 100,
  rotation: -45,
  scale: 0.5,
  duration: 1,
  stagger: 0.3,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#skills",
    start: "top 70%",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
  },
});

// Animation for the projects section
// gsap.from(".buttons", {
//   opacity: 0,
//   y: 100,
//   scale: 0.5,
//   duration: 1,
//   ease: "elastic",
//   scrollTrigger: {
//     trigger: ".buttons",
//     start: "top 70%",
//     toggleActions: "play none none reverse",
//   },
// });

// Animation for the projects section
// const projectCards = document.querySelectorAll(".card");
// projectCards.forEach((card, index) => {
//   gsap.from(card, {
//     opacity: 0,
//     y: 100,
//     rotation: -90,
//     scale: 0.5,
//     duration: 0.5,
//     ease: "power4.out",
//     scrollTrigger: {
//       trigger: card,
//       toggleActions: "play none none reverse",
//     },
//   });
// });
