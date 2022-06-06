const dropDownOpenBtn = document.querySelector('.header-bottom-left-dropdown-btn');
const dropDownCloseBtn = document.querySelector('.header-bottom-left-dropdown-menu-header-closeBtn');
const dropDownMenuFirstLevel = document.querySelector('.header-bottom-left-dropdown-menu');
const dropDownMenuLi = document.querySelectorAll('.header-bottom-left-dropdown-menu-li');
const dropDownAll = document.querySelector('.header-bottom-left-dropdown');
const activesMenu = document.getElementsByClassName('submenu-show');
const searchOpenBtn = document.querySelector('.header-bottom-right-search');
const body = document.body
const overlay = document.querySelector('.bottom-overlay')

const cart = document.querySelector('.ddCart')
const cartOpenBtn = document.querySelector('.header-bottom-right-cart')
const cartCloseBtn = document.querySelector('.ddCart_header_close')

const langOpenBtn = document.querySelector('.header-top-right-item-wrap-descr')
const langContent = document.querySelector('.languageWrap')

const headerTop = document.querySelector('.header-top');
const headerBottom = document.querySelector('.header-bottom');

const filterOpenBtn = document.querySelector('.filter-btn');
const filterContent = document.getElementById('filter');
const filterCloseBtn = document.querySelector('.filter-close-btn');


for (i = 0; dropDownMenuLi.length > i; i++) {
    dropDownMenuLi[i].children[0].onclick = function () {
        let currentActive = activesMenu[0];
        if (currentActive)
            currentActive.classList.remove("submenu-show");

        if (currentActive !== (this.parentElement))
            this.parentElement.classList.add("submenu-show");
    };
}


window.addEventListener('load', start);
window.addEventListener('resize', start);

function start(){
    let c = cartOpenBtn.getBoundingClientRect();
    cart.style.left = `${(c.left - cart.offsetWidth + cartOpenBtn.offsetWidth) + 'px' }`
}


///withoutElFunction ------------------------------------------------------------------------------------------------

let className = null
let classNameTwo = null
let elValue = null

function getClass(classNameNew, classNameTwoNew, elValueNew) {
    className = classNameNew,
        classNameTwo = classNameTwoNew,
        elValue = elValueNew
    return (
        className,
            classNameTwo,
            elValue
    )
}

document.addEventListener( 'click', (e) => {
    const withinBoundaries = e.composedPath().includes(className);
    const withinBoundariesTwo = e.composedPath().includes(classNameTwo);

    if (!withinBoundaries && !withinBoundariesTwo) {
        if (elValue === 'cartEl') {
            cartOpenBtn.classList.remove('overlay-show')
        }

        if (elValue === 'langEl') {
            langOpenBtn.classList.remove('overlay-show')
        }

        if (elValue === 'searchEl') {
            searchOpenBtn.classList.remove('overlay-show')
        }

        overlayShowFunction()
    }
})


///allScrollFunction ------------------------------------------------------------------------------------------------

if(window.innerWidth > 778) {
    window.onscroll = function () {
        if (document.body.scrollTop > headerTop.offsetHeight || document.documentElement.scrollTop > headerTop.offsetHeight) {
            headerBottom.style.position = 'fixed'
            document.body.style.top = `${headerBottom.offsetHeight + 'px'}`
        } else {
            headerBottom.style.position = 'relative'
            document.body.style.top = '0'
        }
    };
}

if(window.innerWidth < 778) {
    headerTop.classList.add('d-none')
}


const overlayStartBtn = document.querySelectorAll('.overlayStartBtn')
const activesOverlay = document.getElementsByClassName('overlay-show');

for (i = 0; overlayStartBtn.length > i; i++) {
    overlayStartBtn[i].onclick = function () {
        let currentActive = activesOverlay[0];
        if (currentActive)
            currentActive.classList.remove("overlay-show");

        if (currentActive !== this)
            this.classList.add("overlay-show");

        overlayShowFunction()
    };

}


function overlayShowFunction() {
    if(window.innerWidth > 778) {
        if(searchOpenBtn.classList.contains('overlay-show') || cartOpenBtn.classList.contains('overlay-show')) {
            body.classList.remove('body-active')
        } else if (dropDownOpenBtn.classList.contains('overlay-show') || filterOpenBtn && filterOpenBtn.classList.contains('overlay-show')) {
            body.classList.add('body-active')
        } else {
            body.classList.remove('body-active')
        }
    } else {
        if(document.querySelector('.overlay-show')) {
            body.classList.add('body-active')
        } else {
            body.classList.remove('body-active')
        }
    }

    if(window.innerWidth < 1040 && filterOpenBtn) {
        filterFunction()
    }

    if(window.innerWidth < 778) {
        if(searchOpenBtn.classList.contains('overlay-show') || cartOpenBtn.classList.contains('overlay-show')) {
            overlay.style.top = '60px'
            headerTop.style.zIndex = '11'
        } else {
            overlay.style.top = '0'
            headerTop.style.zIndex = '0'
        }
        searchFunction()
    }

    cartFunction()
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        menuFunction()
    }
    langFunction()
}


const svgIconClear = `
<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>55BBAA32-A74B-48CA-B787-8494C94F5145</title>
    <g id="Responsive" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="375px---03.-Homepage---Search" transform="translate(-278.000000, -23.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="Search" transform="translate(255.000000, 0.000000)">
                <g id="Icon-/-Clear" transform="translate(23.000000, 23.000000)">
                    <polygon id="Path" points="12.2928932 0.292893219 13.7071068 1.70710678 8.41389322 6.99989322 13.7071068 12.2928932 12.2928932 13.7071068 6.99989322 8.41389322 1.70710678 13.7071068 0.292893219 12.2928932 5.58589322 6.99989322 0.292893219 1.70710678 1.70710678 0.292893219 6.99989322 5.58589322"></polygon>
                </g>
            </g>
        </g>
    </g>
</svg>
`
const svgIconSearch = `
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>C5A1A923-6AF9-4A12-BF3D-A06B03F74DF2</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Homepage" transform="translate(-641.000000, -37.000000)" fill="#FFFF" fill-rule="nonzero">
                <g id="Header" transform="translate(-1.000000, 0.000000)">
                    <g id="1-row" transform="translate(1.000000, 0.000000)">
                        <g id="Search-field" transform="translate(377.000000, 20.000000)">
                            <g id="Icon" transform="translate(264.000000, 17.000000)">
                                <path d="M7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,9.21060437 14.4273178,10.7874516 13.4632192,12.0492761 L15.7071068,14.2928932 C16.0976311,14.6834175 16.0976311,15.3165825 15.7071068,15.7071068 C15.3466228,16.0675907 14.7793918,16.0953203 14.3871006,15.7902954 L14.2928932,15.7071068 L12.0492761,13.4632192 C10.7874516,14.4273178 9.21060437,15 7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 Z M7.5,2 C4.46243388,2 2,4.46243388 2,7.5 C2,10.5375661 4.46243388,13 7.5,13 C10.5375661,13 13,10.5375661 13,7.5 C13,4.46243388 10.5375661,2 7.5,2 Z" id="ic-search"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
`
const svgIconCart = `
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>CD82F479-4FAF-4681-9692-7B28D3DD5D8D</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Homepage" transform="translate(-1281.000000, -109.000000)">
                <g id="Header" transform="translate(-1.000000, 0.000000)">
                    <g id="2-row" transform="translate(0.000000, 90.000000)">
                        <g id="My-cart" transform="translate(1282.000000, 18.000000)">
                            <g id="ic-cart" transform="translate(0.000000, 1.000000)">
                                <rect id="icon-space" x="0" y="0" width="22" height="22"></rect>
                                <path d="M10,18 C11.1045695,18 12,18.8954305 12,20 C12,21.1045695 11.1045695,22 10,22 C8.8954305,22 8,21.1045695 8,20 C8,18.8954305 8.8954305,18 10,18 Z M16,18 C17.1045695,18 18,18.8954305 18,20 C18,21.1045695 17.1045695,22 16,22 C14.8954305,22 14,21.1045695 14,20 C14,18.8954305 14.8954305,18 16,18 Z M1,0 L4,0 C4.43224297,0 4.81064595,0.276787608 4.94681326,0.678060781 L4.97780241,0.790470911 L5.88133729,5.00696698 L5.94020469,5.00175823 L21,5 C21.5997637,5 22.0549227,5.52067883 21.9951229,6.10034708 L21.9761871,6.21693046 L20.324218,13.6507914 C20.0324549,14.9637252 18.9058923,15.91433 17.5779312,15.9945094 L17.3956568,16 L8.61683158,16 C7.26372316,16 6.08648524,15.095862 5.7272766,13.8067174 L5.68342434,13.6285873 L3.19158421,2 L1,2 C0.44771525,2 0,1.55228475 0,1 C0,0.487164161 0.38604019,0.0644928393 0.883378875,0.00672773133 L1,0 Z M19.7533839,7 L6.30841579,7 L7.63902917,13.2095291 C7.72959664,13.6321773 8.07952666,13.9441856 8.50042355,13.9932519 L8.61683158,14 L17.3956568,14 C17.8252972,14 18.2020966,13.7264627 18.3402285,13.3284527 L18.3718438,13.2169305 L19.7533839,7 Z" id="icon" fill="#5CC1DE"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
`


function menuFunction() {
    if(dropDownOpenBtn.classList.contains('overlay-show')) {
        dropDownMenuFirstLevel.classList.remove('d-none')
    } else {
        dropDownMenuFirstLevel.classList.add('d-none')
    }
}

function cartFunction() {
    if(cartOpenBtn.classList.contains('overlay-show')) {
        cart.classList.remove('d-none')
        start()
        getClass(cartOpenBtn, cart, 'cartEl')

        if(window.innerWidth < 778) {
            cartOpenBtn.innerHTML = svgIconClear
            cartOpenBtn.style.backgroundColor = '#183862'
        }
    } else {
        cart.classList.add('d-none')
        if(window.innerWidth < 778) {
            cartOpenBtn.innerHTML = svgIconCart
            cartOpenBtn.style.backgroundColor = '#1E477B'
        }
    }
}

function langFunction() {
    if(langOpenBtn.classList.contains('overlay-show')) {
        langContent.classList.remove('d-none')
        getClass(langOpenBtn, langContent, 'langEl')
    } else {
        langContent.classList.add('d-none')
    }
}

function searchFunction() {
    if(searchOpenBtn.classList.contains('overlay-show')) {
        headerTop.classList.remove('d-none')
        if(window.innerWidth < 778) {
            searchOpenBtn.innerHTML = svgIconClear
            searchOpenBtn.style.backgroundColor = '#183862'
        }
        getClass(searchOpenBtn, headerTop, 'searchEl')
    } else {
        headerTop.classList.add('d-none')
        searchOpenBtn.innerHTML = svgIconSearch
        searchOpenBtn.style.backgroundColor = '#1E477B'
    }
}

function filterFunction() {
    if(filterOpenBtn.classList.contains('overlay-show')) {
        filterContent.style.display = 'block'
        overlay.style.zIndex = '10'
    } else {
        filterContent.style.display = 'none'
        overlay.style.zIndex = '9'
    }
}


overlay.addEventListener('click', () => {
    overlayStartFunction()
})

dropDownCloseBtn.addEventListener('click', () => {
    overlayStartFunction()
})

cartCloseBtn.addEventListener('click', () => {
    overlayStartFunction()
})

if(filterCloseBtn) {
    filterCloseBtn.addEventListener('click', () => {
        overlayStartFunction()
    })
}

function overlayStartFunction() {
    overlayStartBtn.forEach(el => {
        el.classList.remove('overlay-show')
        overlayShowFunction()
    })
}



if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    console.log('this is a touch device');
} else {
    console.log('this is not a touch device');

    dropDownAll.addEventListener("mouseover", function() {
        overlay.style.display = "block";
        dropDownMenuFirstLevel.classList.remove('d-none');
    });

    dropDownAll.addEventListener("mouseout", function() {
        overlay.style.display = "none";
        dropDownMenuFirstLevel.classList.add('d-none');
    });

    dropDownMenuLi.forEach(el => {
        const submenu = el.querySelector('.header-bottom-left-dropdown-menu-submenu')
        const svg = el.querySelector('.header-bottom-left-dropdown-menu-li-wrap svg')
        const svgArrow = el.querySelector('.header-bottom-left-dropdown-menu-li-wrap svg #arrow-svg')
        el.addEventListener('mouseover', () => {
            submenu.style.display = 'block'
            svg.style.transform = 'rotate(180deg)'
            svgArrow.style.stroke = '#5CC1DE'
        })

        el.addEventListener('mouseout', () => {
            submenu.style.display = 'none'
            svg.style.transform = 'rotate(0)'
            svgArrow.style.stroke = '#A1AAB3'
        })
    })
}


///cartEmptyFunction------------------------------------------------------------------------------------------------

const message = document.querySelector('.empty-message');
const cartContent = document.querySelector('.dd-cart-wrap');
const cartContentItem = cartContent.querySelectorAll('.delivery-right-content-item');


if (cartContentItem && cartContentItem.length) {
    cartContent.classList.remove('d-none');
    message.classList.add('d-none');
} else {
    cartContent.classList.add('d-none');
    message.classList.remove('d-none');
}




