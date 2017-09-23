var nav = $(".nav-wrapper");

$(window).scroll(function () {
  if( $(this).scrollTop() > 1 ) {
    nav.addClass("nav-wrapper-scrolled");
  }
});
