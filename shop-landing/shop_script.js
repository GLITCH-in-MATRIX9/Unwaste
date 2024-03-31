const sr = ScrollReveal({
  origin: "left",
  distance: "50px",
  duration: 2000,
  reset: true,
});

sr.reveal("[data-scroll]");

window.addEventListener("resize", function () {
  if (window.innerWidth <= 640) {
    document
      .getElementById("profile-pic")
      .addEventListener("click", function () {
        var navLinks = document.querySelector(".nav-links");
        navLinks.style.display =
          navLinks.style.display === "none" ? "block" : "none";
      });
  } else {
    // Remove the event listener if screen width is greater than 640 pixels
    document
      .getElementById("profile-pic")
      .removeEventListener("click", toggleNav);
  }
});

// Define the toggleNav function outside of the resize event listener
function toggleNav() {
  var navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "none" ? "block" : "none";
}
