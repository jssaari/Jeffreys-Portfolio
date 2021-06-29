'use strict';

const curLocation = window.location.pathname;
const about = '/about-me.html';
const aboutEl = document.getElementById('about-nav');
const work = '/my-work.html';
const workEl = document.getElementById('work-nav');

const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
//ADD STYLE TO NAV ITEM IF NAV ITEM IS CURRENT PAGE
about === curLocation
  ? (aboutEl.style.opacity = 1) && (aboutEl.style.fontWeight = 600)
  : console.log();
work === curLocation
  ? (workEl.style.opacity = 1) && (workEl.style.fontWeight = 600)
  : console.log();

//HEADER SCROLL ANIMATION
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

//GSAP ANIMATIONS

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();
gsap.from('.g-hero', {
  scrollTrigger: {
    trigger: '.g-hero',
    start: 'top bottom',
  },
  y: 50,
  opacity: 0,
  duration: 0.7,
  stagger: 0.4,
});
gsap.from('.g-about', {
  scrollTrigger: {
    trigger: '.g-about',
    start: 'top center+=200',
  },
  y: 50,
  opacity: 0,
  duration: 0.7,
  stagger: 0.4,
});
gsap.from('.g-card', {
  scrollTrigger: {
    trigger: '.g-card',
    start: 'top center',
  },
  y: 100,
  opacity: 0,
  duration: 0.7,
  stagger: 0.4,
});
gsap.from('.gsap-my-work-img', {
  scrollTrigger: {
    trigger: '.gsap-my-work-img',
    start: 'top center+=100',
  },
  opacity: 0,
  duration: 2,
  x: -100,
  ease: 'power2.out',
});
gsap.from('.g-my-work-right', {
  scrollTrigger: {
    trigger: '.g-my-work-right',
    start: 'top center+=100',
  },
  opacity: 0,
  duration: 2,
  x: 100,
  ease: 'power2.out',
});
gsap.from('iframe', {
  scrollTrigger: {
    trigger: 'iframe',
    start: 'top center',
  },
  opacity: 0,
  duration: 2,
  x: 100,
  ease: 'power2.out',
});
gsap.from('.g-buttons', {
  scrollTrigger: {
    trigger: '.g-buttons',
    start: 'top center+=250',
  },
  opacity: 0,
  duration: 1,
  y: -50,
  ease: 'power2.out',
});
gsap.from('.g-my-work', {
  scrollTrigger: {
    trigger: '.g-my-work',
    start: 'top center+=100',
  },
  stagger: 0.3,
  opacity: 0,
  duration: 1,
  y: -50,
  ease: 'power2.out',
});
gsap.from('.g-tools', {
  scrollTrigger: {
    trigger: '.g-tools',
    start: 'top center+=250',
  },
  opacity: 0,
  duration: 1,
  y: 100,
  ease: 'power2.out',
});
gsap.from('.suggestions', {
  scrollTrigger: {
    trigger: '.suggestions',
    start: 'top center+=250',
  },
  opacity: 0,
  duration: 1,
  y: 50,
  ease: 'power2.out',
});
gsap.from('.g-YouTube', {
  scrollTrigger: {
    trigger: '.g-YouTube',
    start: 'top center+=250',
  },
  stagger: 0.3,
  opacity: 0,
  duration: 2,
  x: -100,
  ease: 'power2.out',
});
gsap.from('.g-form', {
  scrollTrigger: {
    trigger: '.g-form',
    start: 'top center+=250',
  },
  stagger: 0.2,
  opacity: 0,
  duration: 0.5,
  y: 50,
  ease: 'power2.out',
});
gsap.from('.g-footer', {
  scrollTrigger: {
    trigger: '.suggestions',
    start: 'top bottom',
  },
  stagger: 0.3,
  opacity: 0,
  duration: 1,
  y: -50,
  ease: 'power2.out',
});

//ABOUT

// gsap.from('.g-about', {
//   scrollTrigger: {
//     trigger: '.g-about',
//     start: 'top center+=200',
//   },
//   y: 50,
//   opacity: 0,
//   duration: 0.7,
//   stagger: 0.4,
// });

//WORK
// gsap.from('.gsap-my-work-img', {
//   scrollTrigger: {
//     trigger: '.gsap-my-work-img',
//     start: 'top center+=100',
//   },
//   opacity: 0,
//   duration: 2,
//   x: -100,
//   ease: 'power2.out',
// });
// gsap.from('.g-my-work-right', {
//   scrollTrigger: {
//     trigger: '.g-my-work-right',
//     start: 'top center+=100',
//   },
//   opacity: 0,
//   duration: 2,
//   x: 100,
//   ease: 'power2.out',
// });
// gsap.from('.g-buttons', {
//   scrollTrigger: {
//     trigger: '.g-buttons',
//     start: 'top center+=200',
//   },
//   opacity: 0,
//   duration: 1,
//   y: -50,
//   ease: 'power2.out',
// });
// gsap.from('.g-my-work', {
//   scrollTrigger: {
//     trigger: '.g-my-work',
//     start: 'top center+=100',
//   },
//   stagger: 0.3,
//   opacity: 0,
//   duration: 1,
//   y: -50,
//   ease: 'power2.out',
// });
// gsap.from('.g-tools', {
//   scrollTrigger: {
//     trigger: '.g-tools',
//     start: 'top center+=250',
//   },
//   opacity: 0,
//   duration: 1,
//   y: 50,
//   ease: 'power2.out',
// });
// gsap.from('.g-card', {
//   scrollTrigger: {
//     trigger: '.g-card',
//     start: 'top center+=100',
//   },
//   stagger: 0.3,
//   opacity: 0,
//   duration: 1,
//   y: 50,
//   ease: 'power2.out',
// });
// gsap.from('.g-form', {
//   scrollTrigger: {
//     trigger: '.g-form',
//     start: 'top center+=250',
//   },
//   stagger: 0.2,
//   opacity: 0,
//   duration: 0.5,
//   y: 50,
//   ease: 'power2.out',
// });
// gsap.from('.suggestions', {
//   scrollTrigger: {
//     trigger: '.suggestions',
//     start: 'top center+=300',
//   },
//   opacity: 0,
//   duration: 1,
//   y: 50,
//   ease: 'power2.out',
// });
// gsap.from('.g-footer', {
//   scrollTrigger: {
//     trigger: '.suggestions',
//     start: 'top bottom',
//   },
//   stagger: 0.3,
//   opacity: 0,
//   duration: 1,
//   y: -50,
//   ease: 'power2.out',
// });
