$(function () {
  //top 버튼
  $("#top_top").on("click", function (event) {
    event.preventDefault();
    $("html").animate({ scrollTop: 0 }, 1000);
  });

  //요소 숨겼다가 보이게 하기
  const additional = $("#additional");

  $(".second").hide();
  additional.on("click", function (e) {
    e.preventDefault();

    $(".second").show();
  });
});
