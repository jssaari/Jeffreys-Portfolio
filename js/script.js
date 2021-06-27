'use strict';
const curLocation = window.location.pathname;
const about = '/about-me.html';
var aboutEl = document.getElementById('about-nav');
const work = '/my-work.html';
var workEl = document.getElementById('work-nav');

about === curLocation
  ? (aboutEl.style.opacity = 1) && (aboutEl.style.fontWeight = 700)
  : console.log();
work === curLocation
  ? (workEl.style.opacity = 1) && (workEl.style.fontWeight = 700)
  : console.log();
