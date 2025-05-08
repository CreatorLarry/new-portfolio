document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    // Collapse on nav link click
    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
                navbarToggler.click(); // Triggers collapse
            }
        });
    });

    // Collapse on outside click
    document.addEventListener("click", function (event) {
        const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
        if (!isClickInside && navbarCollapse.classList.contains("show")) {
            navbarToggler.click();
        }
    });
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});