$(document).ready(function () {
  $(window).on("scroll resize", function () {
    if ($(window).width() < 768) {
      if ($(window).scrollTop() > 80) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    } else {
      $("header").removeClass("sticky");
    }
  });

  $("nav button").click(function () {
    $("nav").toggleClass("open");
  });
});
