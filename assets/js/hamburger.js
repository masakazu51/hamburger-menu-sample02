$(function () {
  // ハンバーガーアイコンをクリックしたとき、グローバルナビを開閉する
  $(".js-hamburger").on("click", function () {
    $(this).toggleClass("active");
    $(".js-ly-global-nav").fadeToggle(500);
  });
});
