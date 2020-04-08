let navigationMain = document.querySelector('.navigation__list');
let navigationToggle = document.querySelector('.navigation__toggle');
let header = document.querySelector('.header');
let form = document.querySelector('#form');
let sendForm = document.querySelector('.contacts__form-button');
let formFields = document.querySelectorAll('.contacts__form-input');
let successMessage = document.querySelector('.contacts__form-success');
let successToggle = document.querySelector('.contacts__form-success-toggle');

let navToggle = function(x, y, z) {
  y.onclick = function(a) {
  a.preventDefault();

  z.classList.toggle('header--background')

  if (y.classList.contains('navigation__toggle--open')) {
  	y.classList.remove('navigation__toggle--open')
  	y.classList.remove('animate-left')
  	y.classList.add('navigation__toggle--close')
  	y.classList.add('animate-right')
  } else {
  	y.classList.remove('navigation__toggle--close')
  	y.classList.remove('animate-right')
  	y.classList.add('navigation__toggle--open')
  	y.classList.add('animate-left')
  }

  if (x.classList.contains('navigation__list--closed')) {
  	x.classList.remove('navigation__list--closed')
  	x.classList.remove('animate-left')
  	x.classList.add('navigation__list--opened')
  	x.classList.add('animate-right')
  } else {
  	x.classList.remove('navigation__list--opened')
  	x.classList.remove('animate-right')
  	x.classList.add('navigation__list--closed')
  	x.classList.add('animate-left')
  }
};
};

navToggle(navigationMain, navigationToggle, header);

jQuery(document).ready(function($) {

$(".contacts__form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "https://formfor.site/send/DFRJPHUPfRgZ41Gc25T1bJ7HVFq503",
data: str,
success: function(msg) {
if(msg == 'OK') {
  
} else {
  
}
$(".contacts__form-success").addClass("contacts__form-success--show")
}
});
return false;
});
});

successToggle.onclick = function() {
  successMessage.classList.remove('contacts__form-success--show');
}


let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 700) {
    upButton.classList.add('up-button--show');
  } else {
    upButton.classList.remove('up-button--show');
    }

};

let projectsItemDescriptions = document.querySelectorAll('.projects__item-description');
let projectsItems = document.querySelectorAll('.projects__item');

for (let projectsItem of projectsItems) {
  let itemDescription = projectsItem.querySelector('.projects__item-description');
  projectsItem.onclick = function (event) {
    event.stopPropagation();
      itemDescription.classList.toggle('projects__item-description--show');
  };
};

document.onclick = function (e) {
  for (let projectsItemDescription of projectsItemDescriptions) {
    
      projectsItemDescription.classList.remove('projects__item-description--show');
    
  }
}