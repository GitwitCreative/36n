function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  script.async = false;
  document.body.append(script);
}
