$(document).ready(function(){

    // Sticky Navbar & Scroll Button
    $(window).on("scroll", function(){
        if(window.scrollY > 20){
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        if(window.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // Smooth Scroll for Menu Links
    $(".navbar .menu li a").on("click", function(){
        $("html").css("scrollBehavior", "smooth");
    });

    // Scroll To Top
    $(".scroll-up-btn").on("click", function(){
        $("html").animate({scrollTop: 0}, 600);
    });

    // Mobile Menu Toggle
    $(".menu-btn").on("click", function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // Professional Typing Animation
    if(document.querySelector(".typing")){
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
