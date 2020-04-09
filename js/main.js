let navigationMain = document.querySelector('.navigation__list');
let navigationToggle = document.querySelector('.navigation__toggle');
let header = document.querySelector('.header');
let form = document.querySelector('#form');
let sendForm = document.querySelector('.contacts__form-button');
let formFields = document.querySelectorAll('.contacts__form-input');
let successMessage = document.querySelector('.contacts__form-success');
let successToggle = document.querySelector('.contacts__form-success-toggle');
let upButton = document.querySelector('.up-button');
let projectsItems = document.querySelectorAll('.projects__item');
let projectsItemDescriptions = document.querySelectorAll('.projects__item-description');

let navToggle = function(x, y, z) {
  y.onclick = function(a) {
  a.preventDefault();

  z.classList.toggle('header--background')

  if (y.classList.contains('navigation__toggle--open')) {
  	y.classList.remove('navigation__toggle--open')
  	y.classList.remove('animate-left')
  	y.classList.add('navigation__toggle--close')
  	y.classList.add('animate-right-toggle')
  } else {
  	y.classList.remove('navigation__toggle--close')
  	y.classList.remove('animate-right-toggle')
  	y.classList.add('navigation__toggle--open')
  	y.classList.add('animate-left')
  }

  if (x.classList.contains('navigation__list--closed')) {
  	x.classList.remove('navigation__list--closed')
  	x.classList.remove('animate-left')
  	x.classList.add('navigation__list--opened')
  	x.classList.add('animate-right-navigation')
  } else {
  	x.classList.remove('navigation__list--opened')
  	x.classList.remove('animate-right-navigation')
  	x.classList.add('navigation__list--closed')
  	x.classList.add('animate-left')
  }
};
};

navToggle(navigationMain, navigationToggle, header);

successToggle.onclick = function() {
  successMessage.classList.remove('contacts__form-success--show');
};

window.onscroll = function () {
  if (window.pageYOffset > 700) {
    upButton.classList.add('up-button--show');
  } else {
    upButton.classList.remove('up-button--show');
    };
};

let clearSection = function () {
  for (let projectsItemDescription of projectsItemDescriptions) {
    projectsItemDescription.classList.remove('projects__item-description--show');
  }
};

for (let projectsItem of projectsItems) {
  let itemDescription = projectsItem.querySelector('.projects__item-description');
  projectsItem.onclick = function (event) {
    event.stopPropagation();
    clearSection();
    itemDescription.classList.toggle('projects__item-description--show');
  };
  itemDescription.onclick = function (event) {
    event.stopPropagation();
    itemDescription.classList.remove('projects__item-description--show');
  };
}

document.onclick = function () {
  clearSection();
};