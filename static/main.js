//loader//
$(window).on('load', function(){
  $('.lds-roller').fadeOut(1000);
  $('.wrap').fadeIn(1000);
});

//slideshow works//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("work");
  var crosses = document.getElementsByClassName("cross");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < crosses.length; i++) {
      crosses[i].className = crosses[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  crosses[slideIndex-1].className += " active";
}

//hideanchorlinkurl and smoothscrooll//
$(document).ready(function(){
  $('.backhome').click(function (e) {
    e.preventDefault();

    $('.wrap').animate({
      scrollTop: $("#homedevicecont").offset().top - 0
    }, 600);
  });

  $('.aboutdevice').click(function (e) {
    e.preventDefault();

    $('.wrap').animate({
      scrollTop: $("#aboutdevicecont").offset().top - 0
    }, 600);
  });

  $('.worksdevice').click(function (e) {
    e.preventDefault();

    $('.wrap').animate({
      scrollTop: $("#workdevicecont").offset().top - 0
    }, 600);
  });

  $('.contactdevice').click(function (e) {
    e.preventDefault();

    $('.wrap').animate({
      scrollTop: $("#contactdevicecont").offset().top - 0
    }, 600);
  });
});
