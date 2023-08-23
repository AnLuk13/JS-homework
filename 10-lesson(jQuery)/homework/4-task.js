//Create a list of items(any topic) and on hover show details on each row

$(document).ready(() => {
  $("li").hover(
    function () {
      $(this).find(".details").css("display", "block");
    },
    function () {
      $(this).find(".details").css("display", "none");
    }
  );
});
