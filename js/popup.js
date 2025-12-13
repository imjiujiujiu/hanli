$(document).ready(function () {
  function openPopup(id) {
    if (!id || $("#" + id).length === 0) return;

    $(".overlay").remove();
    $("body").append('<div class="overlay"></div>');
    $(".popup").removeClass("show");

    setTimeout(() => {
      $("#" + id).addClass("show");
    }, 10);
  }

  $("[for]").click(function () {
    let id = $(this).attr("for");
    openPopup(id);

    history.replaceState(null, null, "#" + id);
  });

  $(document).on("click", ".overlay, .action", function () {
    $(".overlay").remove();
    $(".popup").removeClass("show");

    history.replaceState(null, null, " ");
  });

  let hash = window.location.hash.replace("#", "");
  if (hash) {
    setTimeout(() => {
      openPopup(hash);
    }, 200);
  }
});
