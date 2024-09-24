$(function () {
  //top 버튼
  $("#up_btn").on("click", function (event) {
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

  // 슬릭슬라이드
  $(".slide").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    infinite: true,
    prevArrow: $("#arrow_prev"), //이전 화살표만 변경
    nextArrow: $("#aroww_next"), //다음 화살표만 변경
  });
});
