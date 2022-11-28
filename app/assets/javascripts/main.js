//= require jquery
//= require jquery_ujs

$(document).ready(function () {
  $(".CloseIconWrapper").click(function (e) {
    $(".Modal").fadeOut();
    $("body").removeClass("BodyModalShown");
    $(document.documentElement).css("overflow", "auto");
    e.preventDefault();
    e.stopPropagation();
  });
  $(".CourseSummaryItem").click(function (e) {
    if ($(".Modal", this).is(":hidden")) {
      $(".Modal", this).css("display", "flex").hide().fadeIn();
      $("body").addClass("BodyModalShown");
      $(document.documentElement).css("overflow", "hidden");
      e.preventDefault();
    }
  });
  $(".FaqItem").click(function (e) {
    if ($(".Modal", this).is(":hidden")) {
      $(".Modal", this).css("display", "flex").hide().fadeIn();
      $("body").addClass("BodyModalShown");
      $(document.documentElement).css("overflow", "hidden");
      e.preventDefault();
    }
  });
});
