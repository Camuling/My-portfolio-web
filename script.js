document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            navbar.style.background = "rgba(15,23,42,0.98)";
        } else {
            navbar.style.background = "rgba(15,23,42,0.9)";
        }
    });

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    if (document.querySelector(".typing")) {
        new Typed(".typing", {
            strings: [
                "Junior Web Developer",
                "Frontend Developer",
                "Support-Focused Problem Solver"
            ],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });
    }

});
