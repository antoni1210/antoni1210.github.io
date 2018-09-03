$(document).ready(function(){
  $(this).scrollTop(0);
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

document.getElementById('contact').addEventListener('click', function () {
  document.body.scrollIntoView(false);
});

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $('.navbar-burger').click(function() {

    // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');

  });
});
