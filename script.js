// Skill bar animation
const bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
  bars.forEach(bar => {
    const position = bar.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});

// Scroll reveal animation
window.addEventListener("scroll", function() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(function(reveal) {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      reveal.classList.add("active");
    }
  });
});
