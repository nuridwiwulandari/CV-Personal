document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");
  const contentSelectors = [
    ".profil-container",
    ".Skill-container",
    ".pengalaman-container",
    ".pendidikan-container",
    ".Footer-container",
  ];
  const mainContents = contentSelectors
    .map((sel) => document.querySelector(sel))
    .filter(Boolean);

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
    mainContents.forEach(function (content) {
      content.style.marginLeft = sidebar.classList.contains("collapsed")
        ? "70px"
        : "230px";
    });
  });

  // Aktifkan menu saat diklik
  document.querySelectorAll(".li-navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.querySelectorAll(".li-navbar a").forEach(function (l) {
        l.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
