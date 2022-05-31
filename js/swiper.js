const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    spaceBetween: 0,
    loop: true
});


const swiperPartners = new Swiper(".mySwiperPartners", {
    slidesPerView: "auto",
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 500,
    navigation: {
        nextEl: ".swiper-button-next-l",
        prevEl: ".swiper-button-prev-l",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: "auto",
        },
    }
});