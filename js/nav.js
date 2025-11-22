$(document).ready(function () {
  //   function setNavbarDisplay() {
  //     if ($(window).width() < 768) {
  //       $("nav .navbar").hide();
  //     } else {
  //       $("nav .navbar").show();
  //     }
  //   }

  //   // 初始執行
  //   setNavbarDisplay();
  //   // 當視窗調整大小時也要偵測
  //   $(window).resize(function () {
  //     setNavbarDisplay();
  //   });

  $("nav button").click(function () {
    $("nav").toggleClass("open");
  });
});
