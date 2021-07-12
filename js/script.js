'use strict';

const curLocation = window.location.pathname;
const about = '/about-me.html';
const aboutEl = document.getElementById('about-nav');
const aboutElMob = document.getElementById('about-nav-mobile');
const work = '/my-work.html';
const workEl = document.getElementById('work-nav');
const workElMob = document.getElementById('work-nav-mobile');

const hamburger = document.getElementById('hamburger-icon');
const hamburgerMenu = document.getElementById('hamburger');

const learned = document.getElementById('learned');
const learnedButton = document.getElementById('learned-button');
const languages = document.getElementById('languages');
const languagesButton = document.getElementById('languages-button');
const closeIcon = document.getElementById('close');

const body = document.body;
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
let lastScroll = 0;
//ADD STYLE TO NAV ITEM IF NAV ITEM IS CURRENT PAGE
about === curLocation
  ? (aboutEl.style.opacity = 1) &&
    (aboutEl.style.fontWeight = 600) &&
    (aboutElMob.style.fontWeight = 600)
  : console.log();
work === curLocation
  ? (workEl.style.opacity = 1) &&
    (workEl.style.fontWeight = 600) &&
    (workElMob.style.fontWeight = 600)
  : console.log();

//REVEAL HAMBURGER MENU ON CLICK
hamburger.onclick = function revealHamburger() {
  !hamburgerMenu.classList.contains('reveal-ham')
    ? hamburgerMenu.classList.add('reveal-ham')
    : hamburgerMenu.classList.remove('reveal-ham');
  // if ((hamburgerMenu.style.cssText = 'display:none;')) {
  //   hamburgerMenu.style.cssText = 'display:block;';
  // } else if ((hamburgerMenu.style.cssText = 'display:block;')) {
  //   hamburgerMenu.style.cssText = 'display:none;';
  // }
};

//REVEAL WHAT I LEARNED ON CLICK
learnedButton.onclick = function revealLearned() {
  learned.style.display = 'flex';
  languages.style.display = 'none';
};

languagesButton.onclick = function revealLearned() {
  languages.style.display = 'flex';
  learned.style.display = 'none';
};

closeIcon.onclick = function revealLearned() {
  languages.style.display = 'flex';
  learned.style.display = 'none';
};

//HEADER SCROLL ANIMATION
window.addEventListener('scroll', () => {
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
