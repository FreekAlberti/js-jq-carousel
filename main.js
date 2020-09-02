$("document").ready(function () {

  $(".next > i").click(
    function() {
      $(".images > img.active").removeClass("active");
    }
  );

  $(".prev > i").click(
    function() {
    $(".images > img.active").removeClass("active");
  }
  );
});
