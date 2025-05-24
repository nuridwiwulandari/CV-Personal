document.querySelectorAll(".li-navbar a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelectorAll(".li-navbar a").forEach(function (l) {
      l.classList.remove("active");
    });
    this.classList.add("active");
  });
});
