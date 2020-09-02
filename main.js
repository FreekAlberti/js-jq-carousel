$("document").ready(function () {

  $(".next > i").click(
    function() {
      var images = $(".images > img.active");
      if (images.hasClass("last")) {
        $(".images > img.first").addClass("active");
      } else {
        images.next().addClass("active");
      }
      images.removeClass("active");
    }
  );

  $(".prev > i").click(
    function() {
      var images = $(".images > img.active");
      if (images.hasClass("first")) {
        $(".images > img.last").addClass("active");
      } else {
        images.prev().addClass("active");
      }
      images.removeClass("active");
    }
  );
});
