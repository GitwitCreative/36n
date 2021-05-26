var Webflow = Webflow || [];
Webflow.push(function () {
  const $navbar = $(".navbar-wrapper");
  const $logo = $("#nav-logo-transparent");
  var scroll_start = 0;
  const offset = $navbar.offset();

  Webflow.scroll.on(function () {
    scroll_start = $(this).scrollTop();
    //offset.top
    if (scroll_start > 50) {
      if (!$navbar.hasClass("active")) {
        $navbar.addClass("active");
        $logo.attr("src", "https://uploads-ssl.webflow.com/603e8caef70bd86255288414/609079308bfb310987247e02_logo-dark.png");
      }
    } else {
      $navbar.removeClass("active");
      $logo.attr("src", "https://uploads-ssl.webflow.com/603e8caef70bd86255288414/60907930b0d5a66f31e930c5_logo-light.png");
    }
  });

  if ($("#datepicker").length) {
    $("#datepicker").datepicker();
  }
});

loadScript("https://code.jquery.com/ui/1.12.1/jquery-ui.js");

var cleanName = function (str) {
  if (!str) {
    str = "empty";
  }
  return str
    .replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, "")
    .replace(/ /g, "-")
    .replace("--", "-")
    .toLowerCase()
    .trim();
};

var htmlDecode = function (input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};
