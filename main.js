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

  var activeImgTmp = $(".images .first");
  var activeIndTmp = $(".nav .first");

  for(var i = 1; i <= 4; i++){
      switch(i){
          case 1:
              activeImgTmp.addClass("one");
              activeIndTmp.addClass("one");
              break;
          case 2:
              activeImgTmp.addClass("two");
              activeIndTmp.addClass("two");
              break;
          case 3:
              activeImgTmp.addClass("three");
              activeIndTmp.addClass("three");
              break;
          case 4:
              activeImgTmp.addClass("four");
              activeIndTmp.addClass("four");
              break;
      }
      activeIndTmp = activeIndTmp.next();
      activeImgTmp = activeImgTmp.next();
  }

  var firstIndex = $(".nav i.one");
  var secondIndex = $(".nav i.two");
  var threeIndex = $(".nav i.three");
  var fourIndex = $(".nav i.four");

  firstIndex.click(function() {
      changePositionOnClick(1);
  });
  secondIndex.click(function() {
      changePositionOnClick(2);
  });
  threeIndex.click(function() {
      changePositionOnClick(3);
  });
  fourIndex.click(function() {
      changePositionOnClick(4);
  });

  function changePositionOnClick(pos){

      switch(pos){
          case 1:
              $(".images img.active").removeClass("active");
              $(".images img.one").addClass("active");
              $(".nav i.active").removeClass("active");
              $(".nav i.one").addClass("active");
              break;
          case 2:
              $(".images img.active").removeClass("active");
              $(".images img.two").addClass("active");
              $(".nav i.active").removeClass("active");
              $(".nav i.two").addClass("active");
              break;
          case 3:
              $(".images img.active").removeClass("active");
              $(".images img.three").addClass("active");
              $(".nav i.active").removeClass("active");
              $(".nav i.three").addClass("active");
              break;
          case 4:
              $(".images img.active").removeClass("active");
              $(".images img.four").addClass("active");
              $(".nav i.active").removeClass("active");
              $(".nav i.four").addClass("active");
              break;
      }
  }

})

//FUNCTION

function myNext() {
  var images = $(".images > img.active");
  var circle = $(".nav > i.active");
  if (images.hasClass("last")) {
    $(".images > img.first").addClass("active");
  } else {
    images.next().addClass("active");
  }
  images.removeClass("active");
  if (circle.hasClass("last")) {
    $(".nav > i.first").addClass("active");
  } else {
    circle.next().addClass("active");
  }
  circle.removeClass("active");
}

function myPrev() {
  var images = $(".images > img.active");
  var circle = $(".nav > i.active");
  if (images.hasClass("first")) {
    $(".images > img.last").addClass("active");
  } else {
    images.prev().addClass("active");
  }
  images.removeClass("active");
  if (circle.hasClass("first")) {
    $(".nav > i.last").addClass("active");
  } else {
    circle.prev().addClass("active");
  }
  circle.removeClass("active");
}
