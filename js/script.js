'use strict';
//VARIABLES
//-----------------------------------------------------------------------------
//ADDING STYLE TO NAV
const curLocation = window.location.pathname;
const about = '/about-me.html';
const aboutEl = document.getElementById('about-nav');
const aboutElMob = document.getElementById('about-nav-mobile');
const work = '/my-work.html';
const workEl = document.getElementById('work-nav');
const workElMob = document.getElementById('work-nav-mobile');

//HAMBURGER
const hamburger = document.getElementById('hamburger-icon');
const hamburgerMenu = document.getElementById('hamburger');

//MOBILE MENU MODAL
const mobileMenuButton = document.getElementById('mobile-nav-button');

//RECENT WORK TILES
const learned = document.getElementById('learned');
const learnedButton = document.getElementById('learned-button');
const languages = document.getElementById('languages');
const languagesButton = document.getElementById('languages-button');
const closeIcon = document.getElementById('close');
const learned2 = document.getElementById('learned-2');
const learnedButton2 = document.getElementById('learned-button-2');
const languages2 = document.getElementById('languages-2');
const languagesButton2 = document.getElementById('languages-button-2');
const closeIcon2 = document.getElementById('close-2');
const learned3 = document.getElementById('learned-3');
const learnedButton3 = document.getElementById('learned-button-3');
const languages3 = document.getElementById('languages-3');
const languagesButton3 = document.getElementById('languages-button-3');
const closeIcon3 = document.getElementById('close-3');

//HEADER SCROLL
const body = document.body;
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
let lastScroll = 0;

//FUNCTIONS
//-----------------------------------------------------------------------------
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
};
//HIDE MOBILE MENU ON CONTACT BUTTON CLICK
mobileMenuButton.onclick = function hideMobileMenu() {
  if (hamburgerMenu.classList.contains('reveal-ham')) {
    hamburgerMenu.classList.remove('reveal-ham');
  }
};

//TOGGLE WHAT I LEARNED ON CLICK
if (work === curLocation) {
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

  learnedButton2.onclick = function revealLearned() {
    learned2.style.display = 'flex';
    languages2.style.display = 'none';
  };

  languagesButton2.onclick = function revealLearned() {
    languages2.style.display = 'flex';
    learned2.style.display = 'none';
  };

  closeIcon2.onclick = function revealLearned() {
    languages2.style.display = 'flex';
    learned2.style.display = 'none';
  };

  learnedButton3.onclick = function revealLearned() {
    learned3.style.display = 'flex';
    languages3.style.display = 'none';
  };

  languagesButton3.onclick = function revealLearned() {
    languages3.style.display = 'flex';
    learned3.style.display = 'none';
  };

  closeIcon3.onclick = function revealLearned() {
    languages3.style.display = 'flex';
    learned3.style.display = 'none';
  };
} else {
}

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
  y: -100,
  ease: 'power2.out',
});
gsap.from('.g-my-work-right', {
  scrollTrigger: {
    trigger: '.g-my-work-right',
    start: 'top center+=100',
  },
  opacity: 0,
  duration: 2,
  y: 100,
  ease: 'power2.out',
});
gsap.from('iframe', {
  scrollTrigger: {
    trigger: 'iframe',
    start: 'top center',
  },
  opacity: 0,
  duration: 2,
  y: 100,
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
    start: 'top center+=450',
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
  y: -100,
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

//ABOUT LANDING

gsap.from('.g-about-education', {
  scrollTrigger: {
    trigger: '.g-about-education',
    start: 'top center+=200',
  },
  y: 50,
  opacity: 0,
  duration: 0.7,
  stagger: 0.4,
});
gsap.from('.g-about-courses', {
  scrollTrigger: {
    trigger: '.g-about-courses',
    start: 'top center+=200',
  },
  y: 50,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
});
gsap.from('.g-about-something', {
  scrollTrigger: {
    trigger: '.g-about-something',
    start: 'top center+=200',
  },
  y: 50,
  opacity: 0,
  duration: 0.7,
  stagger: 0.4,
});
