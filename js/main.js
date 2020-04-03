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
 // y.classList.toggle('navigation__toggle--close');
 // y.classList.toggle('navigation__toggle--open');
 // x.classList.toggle('navigation__list--closed');
 // x.classList.toggle('navigation__list--opened');
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

}
});
return false;
});
});

sendForm.onclick = function() {
  successMessage.classList.add('contacts__form-success--show');
  for(let formField of formFields) {
    formField.value = '';
  }
}

successToggle.onclick = function() {
  successMessage.classList.remove('contacts__form-success--show');
}
