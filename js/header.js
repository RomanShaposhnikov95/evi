const menuOpenBtn = document.querySelector('.header_bottom_container_left_wrap');
const overlay = document.querySelector('.overlay');
const headerTop = document.querySelector('.header_top');
const headerBottom = document.querySelector('.header_bottom');

menuOpenBtn.addEventListener("mouseover", function(  ) {
    overlay.style.display = "block";
});

menuOpenBtn.addEventListener("mouseout", function(  ) {
    overlay.style.display = "none";
    headerBottom.style.backgroundColor = 'white'
});

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > headerTop.offsetHeight || document.documentElement.scrollTop > headerTop.offsetHeight) {
        headerBottom.style.position = 'fixed'
        headerBottom.style.zIndex = '9'
        overlay.style.zIndex = "8";
        document.body.style.top = `${headerBottom.offsetHeight + 'px'}`
        menuOpenBtn.addEventListener("mouseover", function(  ) {
            headerBottom.style.backgroundColor = '#CDCED0'
        });

    } else {
        overlay.style.zIndex = "10";
        headerBottom.style.position = 'relative'
        headerBottom.style.zIndex = 'unset'
        document.body.style.top = '0'
        menuOpenBtn.addEventListener("mouseover", function(  ) {
            headerBottom.style.backgroundColor = 'white'
        });
    }
}



const langOpen = document.querySelector('.lang-wrap')
const langContent = document.querySelector('.ddLang')
const langWrap = document.querySelector('.lang-open')

langOpen.addEventListener('click', () => {
    langContent.classList.toggle("d-none")
})



const cart = document.querySelector('.header_bottom_container_cart')
const cartContent = document.querySelector('.ddCart')
const svg = cart.querySelector('.svgArrow')
const closeBtn = document.querySelector('.ddCart_header_close')

cart.addEventListener('click', () => {
    let coord = cart.getBoundingClientRect();
    cartContent.classList.toggle("d-none")
    cartContent.style.left = `${(coord.left - cartContent.offsetWidth + cart.offsetWidth ) + 'px' }`
    svg.classList.toggle("activeSvg")
})


window.addEventListener('resize', start);

function start(){
    let c = cart.getBoundingClientRect();
    cartContent.style.left = `${(c.left - cartContent.offsetWidth + cart.offsetWidth) + 'px' }`
}

document.addEventListener( 'click', (e) => {
    const withinBoundaries = e.composedPath().includes(cartContent);
    const withinBoundariesTwo= e.composedPath().includes(cart);

    if (!withinBoundaries && !withinBoundariesTwo && !cartContent.classList.contains('d-none')) {
        closeCart()
    }

    const withinBoundariesLang = e.composedPath().includes(langWrap);

    if(!withinBoundariesLang && !langContent.classList.contains('d-none')) {
        closeLang()
    }
})

function closeCart() {
    cartContent.classList.add('d-none')
    svg.classList.remove("activeSvg")
}

function closeLang() {
    langContent.classList.add('d-none')
    // svg.classList.remove("activeSvg")
}

closeBtn.addEventListener('click', () => {
    closeCart()
})


const message = document.querySelector('.empty-message');
const cartContentItem = document.querySelector('.dd-cart-wrap')


if (!cartContent.querySelectorAll(".delivery-right-content-item").length) {
    cartContentItem.classList.add('d-none')
    message.classList.remove('d-none')
} else {
    cartContentItem.classList.remove('d-none')
    message.classList.add('d-none')
}


