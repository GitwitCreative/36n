var allCategories = {};

var Webflow = Webflow || [];
Webflow.push(function () {
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

  var categoryItems = document.querySelectorAll(".data-block .filter-category");
  categoryItems.forEach(function (elem) {
    var text = elem.innerText || elem.innerContent;
    var className = cleanName(text);
    allCategories[className] = text;
    elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(className);
  });
  Object.keys(allCategories)
    .sort()
    .forEach((key) => {
      $("#industry").append(
        $("<option>", {
          value: "." + key,
          text: allCategories[key],
        })
      );
    });

  const containerEl = document.querySelector(".mix-container");
  var mixer = mixitup(containerEl, {
    selectors: {
      target: ".sort-item",
    },
    animation: {
      duration: 300,
    },
    multifilter: {
      enable: true,
    },
    callbacks: {
      onMixStart: function (state, futureState) {
        console.log(futureState.activeFilter.selector);
      },
    },
  });
});
