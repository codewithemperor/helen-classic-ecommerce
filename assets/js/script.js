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

// Product Color Chooser

const colorOptions = document.querySelectorAll('.color-option');

    function selectColor(event) {
        
        colorOptions.forEach(option => {
            option.classList.remove('selected');
        });

        // Select the clicked color option
        event.target.classList.add('selected');
    }

    colorOptions.forEach(option => {
        option.addEventListener('click', selectColor);
    });