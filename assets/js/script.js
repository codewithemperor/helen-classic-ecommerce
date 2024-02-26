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
