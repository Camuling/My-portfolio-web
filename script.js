// Animate Skill Bars on Scroll

const bars = document.querySelectorAll('.progress-bar');

function showProgress() {
  bars.forEach(bar => {
    const value = bar.getAttribute('data-progress');
    bar.style.width = value + "%";
  });
}

window.addEventListener('load', showProgress);
