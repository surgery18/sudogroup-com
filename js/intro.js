var intro = $('div.intro');

$(document).on('scroll', function() {
  intro.slideUp(500, function() {
    $(document).off('scroll');
  });
});
