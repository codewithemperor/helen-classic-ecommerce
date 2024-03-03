window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    document.getElementById("navbar").classList.remove("sticky-top");
    document.getElementById("navbar").classList.add("fixed-top");

  } else {
    document.getElementById("navbar").classList.add("sticky-top");
    document.getElementById("navbar").classList.remove("fixed-top");

  }
}

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// slide

  // let currentSlide = 0;
  // const totalSlides = document.querySelectorAll('.slide').length;

  // function slide(direction) {
  //   const slides = document.querySelector('.slides');
    
  //   if (direction === 'left') {
  //     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  //   } else if (direction === 'right') {
  //     currentSlide = (currentSlide + 1) % totalSlides;
  //   }

  //   const slideWidth = document.querySelector('.slide').offsetWidth;
  //   slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  // }
