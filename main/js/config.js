if (window.location.hostname === "expandestates.github.io") {
  document.querySelectorAll("a[href]").forEach(function (anchor) {
    var href = anchor.getAttribute("href");
    anchor.setAttribute("href", "/ExpandEstates" + href);
  });
}
