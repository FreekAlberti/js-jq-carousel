$("document").ready(function () {

  $(".next > i").click(
    function() {
      myNext();
    }
  );

  $(".prev > i").click(
    function() {
      myPrev();
    }
  );

  $(document).keydown(function(e){
    if (e.keyCode == 39) {
      myNext();
    } else if (e.keyCode == 37) {
      myPrev();
    }
  });
})

//FUNCTION

function myNext() {
  var images = $(".images > img.active");
  if (images.hasClass("last")) {
    $(".images > img.first").addClass("active");
  } else {
    images.next().addClass("active");
  }
  images.removeClass("active");
}

function myPrev() {
  var images = $(".images > img.active");
  if (images.hasClass("first")) {
    $(".images > img.last").addClass("active");
  } else {
    images.prev().addClass("active");
  }
  images.removeClass("active");
}
