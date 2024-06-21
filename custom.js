$(function () {
  /* Wow Scroll Animation */
  wow = new WOW({
    boxClass: "wow",
    offset: 150,
    mobile: true,
  });
  wow.init();
});

$(function () {
  // btn 제한
  let btncount = 0;
  if (btncount === 0) {
    $(".left-btn").addClass("limit");
  }

  // Card Scroll Btn
  $(".right-btn").click(function () {
    // margin-right
    if (btncount < 4) {
      let margin = parseInt($(".cards-scroll").css("margin-left")) || 0;
      $(".cards-scroll").css("margin-left", margin - 344 + "px");
      btncount++;
      $(".left-btn").removeClass("limit");
    } else {
      $(".right-btn").addClass("limit");
    }
  });
  $(".left-btn").click(function () {
    // margin-left값
    if (btncount > 0) {
      let margin = parseInt($(".cards-scroll").css("margin-left")) || 0;
      $(".cards-scroll").css("margin-left", margin + 344 + "px");
      btncount--;
      $(".right-btn").removeClass("limit");
    } else {
      $(".left-btn").addClass("limit");
    }
  });

  let incentiveBtnCount = 0;
  if (incentiveBtnCount === 0) {
    $(".incentive-left-btn").addClass("limit");
  }

  // Card Scroll Btn
  $(".incentive-right-btn").click(function () {
    // margin-right
    if (btncount < 4) {
      let margin = parseInt($(".incentive-cards").css("margin-left")) || 0;
      $(".incentive-cards").css("margin-left", margin - 372 + "px");
      btncount++;
      $(".incentive-left-btn").removeClass("limit");
    } else {
      $(".incentive-right-btn").addClass("limit");
    }
  });
  $(".incentive-left-btn").click(function () {
    // margin-left값
    if (btncount > 0) {
      let margin = parseInt($(".incentive-cards").css("margin-left")) || 0;
      $(".incentive-cards").css("margin-left", margin + 372 + "px");
      btncount--;
      $(".incentive-right-btn").removeClass("limit");
    } else {
      $(".incentive-left-btn").addClass("limit");
    }
  });

  // Augment Accprdion
  $(".augment-desc").eq(0).show();
  $(".augment-title").click(function () {
    $(this).next().stop().slideDown();
    $(this).parent().siblings().children(".augment-desc").stop().slideUp();
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");

    // 이미지
    let imgSrc = $(this).parent().attr("data-img");
    $(".augment-right img").attr("src", imgSrc);
  });

});
