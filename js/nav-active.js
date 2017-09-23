$(document).on("click", ".nav-item", function(){
  var curActive = $(".nav-item.active").removeClass("active");
  $(this).addClass("active");
});
