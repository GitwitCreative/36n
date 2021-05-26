var Webflow = Webflow || [];
Webflow.push(function () {});

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
