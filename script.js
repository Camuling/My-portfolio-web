// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  const bars = document.querySelectorAll(".progress-bar");
  const reveals = document.querySelectorAll(".reveal");

  // Hide reveal elements initially (safe animation setup)
  reveals.forEach(reveal => {
    reveal.classList.add("hidden");
  });

  function handleScroll() {

    const windowHeight = window.innerHeight;

    // Skill bar animation
    bars.forEach(bar => {
      const position = bar.getBoundingClientRect().top;

      if (position < windowHeight - 100 && bar.style.width === "") {
        bar.style.width = bar.getAttribute("data-width");
      }
    });

    // Scroll reveal animation
    reveals.forEach(reveal => {
      const revealTop = reveal.getBoundingClientRect().top;

      if (revealTop < windowHeight - 100) {
        reveal.classList.remove("hidden");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);

  // Run once on load in case content is already visible
  handleScroll();

});

// Automatic Day/Night Mode
function setThemeBasedOnTime() {
  const hour = new Date().getHours();

  // Dark mode from 6PM to 6AM
  if (hour >= 18 || hour < 6) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

setThemeBasedOnTime();
