
//make arrows to go to the next or previous slide
// slides pause when you mouseover and start again when you mouseout

var slides = document.querySelectorAll('#slide .slide');
var activeSlide = 0;
var slideTime = setInterval(nextSlide, 3000);

function nextSlide (){
  slides[activeSlide].className = 'slide';
  activeSlide = (activeSlide + 1) % slides.length;
  slides[activeSlide].className = 'slide showing';
}


