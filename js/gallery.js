window.addEventListener('load', () => {
    const swiperModal2 = document.querySelectorAll('.swiper-slide-modal')
    const swiperSlide = document.getElementById('swiper-slide-block');
    const swiperThumb2 = document.getElementById('swiper-thumb');

    let slideNum = document.getElementById('slide-num');
    let slideCount = document.getElementById('slide-count');

    slideCount.innerHTML = swiperModal2.length

    swiperModal2.forEach((el, index) => {
        const src = swiperModal2[index].children[0].getAttribute('data-src')

        const slide = document.createElement('div')
        let classesToAdd = [ 'swiper-slide', 'minimum-height' ];
        slide.classList.add(...classesToAdd)

        const slideImg = document.createElement('img')
        slideImg.classList.add('swiper-slide-img')
        slideImg.src = src

        slide.appendChild(slideImg)
        swiperSlide.appendChild(slide)

        const swiperThumbBtn = document.createElement('div')
        let classesToAddThumb = [ 'swiper-slide', 'swiper-slide-thumbs'];
        swiperThumbBtn.classList.add(...classesToAddThumb)
        swiperThumbBtn.setAttribute("id", `${index}`);

        const thumbImg = document.createElement('img')
        thumbImg.src = src

        swiperThumbBtn.appendChild(thumbImg)
        swiperThumb2.appendChild(swiperThumbBtn)
    })

    let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        loop: false,
        autoHeight: false,
        preloadImages: false,
        lazy: true,
        lazy: {
            loadPrevNext: true,
        },
    });

    let swiper = new Swiper('.swiper-container-main', {
        autoHeight: false,
        observer: true,
        observeParents: true,
        observeChildren: true,
        preloadImages: false,
        allowTouchMove: false,
        lazy: true,
        lazy: {
            loadPrevNext: true,
        },
        keyboard: {
            enabled: true,
        },
        effect: 'creative',
        loop: true,
        thumbs: {
            swiper: galleryThumbs
        },
    });


    let swiperModal = new Swiper('.swiper-container-modal', {
        observer: true,
        observeParents: true,
        observeChildren: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'creative',
        loop: true,
        loopPreventsSlide: false,
        slidesPerView: 1,
        preloadImages: false,
        lazy: true,
        lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true,
        },
        on: {
            slideChange: (swiperModal) => {
                slideNum.innerHTML = swiperModal.realIndex + 1
            }
        }
    });

    const nonModalGalleryImgContainer = document.querySelector(
        '.swiper-container-main'
    );

    let modal = document.getElementById('simpleModal');
    let modalBtn = document.querySelectorAll('.swiper-slide-img');
    let closeBtn = document.getElementsByClassName('closeBtn')[0];
    let content = document.getElementById('swiper-container-modal');


    function openModal() {
        document.body.style.overflow = 'hidden';

        let swiperIndexPos = swiper.activeIndex;
        swiperModal.slideTo(swiperIndexPos);
        swiperModal.lazy.load();
        modal.style.display ='block';
        swiper.keyboard.disable();
        swiperModal.keyboard.enable();
        document.addEventListener('keydown', closeModalWithKeyboard);

        if (swiperIndexPos === 0) {
            slideNum.innerHTML = swiperModal2.length
        } else {
            slideNum.innerHTML = swiperIndexPos
        }
    }

    modalBtn.forEach(element => {
        element.addEventListener('click', openModal);
    })

    function openModalWithKeyboard(event) {
        if (event.key === 'Enter') {
            openModal();
        }
    }

    nonModalGalleryImgContainer.addEventListener('keydown', openModalWithKeyboard);

    function closeModal() {
        document.body.style.overflow = '';

        let swiperModalIndexPos = swiperModal.activeIndex;
        swiper.slideTo(swiperModalIndexPos);
        modal.style.display = 'none';
        swiperModal.keyboard.disable();
        swiper.keyboard.enable();
        document.removeEventListener('keydown', closeModalWithKeyboard);
    }

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(content);

        if ( ! withinBoundaries ) {
            closeModal()
        }
    })

    function closeModalWithKeyboard(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
})


