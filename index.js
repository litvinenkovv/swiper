const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "col",

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    // Breakpoints
    breakpoints: {
        0: {
            /* Webflow mobile landscape/portriat */ 
            slidesPerView: 1,
            spaceBetween: 5,
        },
        767: {
            /* Webflow tablet */ 
            slidesPerView: 1,
            spaceBetween: 5,
        },
        988: {
            /* Webflow desktop */ 
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});
