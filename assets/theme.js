(function () {
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var root = document.documentElement;
    var stored = localStorage.getItem("theme");
    var isDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    var next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();
