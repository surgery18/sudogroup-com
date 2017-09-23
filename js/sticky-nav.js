var nav = $("nav");

$(window).scroll(function () {
  if( $(this).scrollTop() > 1 ) {
    nav.addClass("fixed-top");
  }
});
