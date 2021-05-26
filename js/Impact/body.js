loadScript("https://cdn.jsdelivr.net/npm/counterup2@1.0.4/dist/index.min.js");
loadScript("https://cdn.jsdelivr.net/npm/waypoints@4.0.1/lib/jquery.waypoints.min.js");
loadScript("https://cdn.jsdelivr.net/gh/davatron5000/FitText.js@master/jquery.fittext.js");
loadScript("https://cdn.jsdelivr.net/npm/mixitup@3.3.1/dist/mixitup.min.js");
loadScript("https://cdn.jsdelivr.net/gh/GitwitCreative/gitwitjs@master/mixitup-multifilter.min.js");

var Webflow = Webflow || [];
Webflow.push(function () {
  var counterUp = window.counterUp["default"];

  var $counters = $(".counter");
  $counters.each(function (i, counter) {
    var waypoint = new Waypoint({
      element: $(this),
      handler: function () {
        counterUp(counter, {
          duration: 4000,
          delay: 100,
        });
        this.destroy();
      },
      offset: "80%",
    });
  });

  var $textmegas = $(".text-mega");
  $textmegas.each(function (i, item) {
    //$(this).fitText(1.4, { minFontSize: '20px', maxFontSize: '170px' });
  });
});
