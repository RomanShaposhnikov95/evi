// filterData
const isCheckboxOrRadio = type => ['checkbox'].includes(type);
const {filter} = document.forms;

function retrieveFilterValue(){
    let values = {};

    for (let field of filter) {
        const {name} = field;

        if (name) {
            const {type, checked, value} = field;

            values[name] = isCheckboxOrRadio(type) ? checked : value;
        }
    }
    console.log('data', values); ////filterData!!!!!!
}

filter.addEventListener('change', retrieveFilterValue)


// PRICE RANGE
let priceRanges = document.querySelectorAll('.js-price-range');
let clearBtnRange = document.querySelector('.js-clear-sliders');

priceRanges.forEach(el => {
    let downPriceInput = el.closest('.filter-price').querySelector('.js-price-down');
    let upPriceInput   = el.closest('.filter-price').querySelector('.js-price-up');
    let inputs         = [downPriceInput, upPriceInput];


    //get maxPrice for slider price
    const maxPrice = +upPriceInput.getAttribute('data-max');
    upPriceInput.value = maxPrice.toLocaleString() + ' €';

    //Init price range slider
    noUiSlider.create(el, {
        range: {
            'min': 0,
            'max': maxPrice
        },
        behaviour: 'drag',
        connect  : true,
        start    : [0, maxPrice],
        step     : 1
    });

    //Update value after scroll pointer in slider
    el.noUiSlider.on('update', values => {
        let [downPrice, upPrice] = values;

        console.log('update')

        downPrice = Number(downPrice).toLocaleString() + ' €';
        upPrice   = Number(upPrice).toLocaleString() + ' €';

        downPriceInput.value = downPrice;
        upPriceInput.value   = upPrice;

        const numberDown = Number(downPrice.substr(0, downPrice.length - 1).trim());
        const numberUp = Number(upPrice.substr(0, upPrice.length - 1).trim());
        const maxValue = Number(upPriceInput.getAttribute('data-max'))

        if(numberDown > 0 || numberUp < maxValue) {
            clearBtnRange.classList.remove('d-none')
        } else {
            clearBtnRange.classList.add('d-none')
        }

        retrieveFilterValue()
    });

    //Change slider value after inputs change
    inputs.forEach(function (input, handle) {
        input.addEventListener('input', function () {
            let value = this.value;
            value = value.replace(/\s+/g, '');
            value = parseInt(value);

            el.noUiSlider.setHandle(handle, value);
        });
    });
});

// clear sliders value

clearBtnRange.addEventListener('click', (e) => {
    let filterPrices = document.querySelector('.filter-price');
    let priceRange = filterPrices.querySelector('.js-price-range');
    let priceRangeInputs = filterPrices.querySelectorAll('.filter-price__flex-row input');

    priceRangeInputs.forEach(function (input, handle) {
        let maxPrice = (handle) ? input.getAttribute('data-max') : 0;

        priceRange.noUiSlider.setHandle(handle, maxPrice);
    });
})

const accFilter = document.querySelectorAll('.accordion-filter')

accFilter.forEach(el => {
    const check = el.querySelectorAll('.check')
    const clearBtn = el.querySelector('.clearBtn')

    check.forEach(el => {
        el.addEventListener('change', () => {
            atLeastOneCheckboxIsChecked()
            if(atLeastOneCheckboxIsChecked()) {
                clearBtn.classList.remove('d-none')
            } else {
                clearBtn.classList.add('d-none')
            }
        })
    })

    clearBtn.addEventListener('click', () => {
        CheckboxIsCheckedFalse()
        clearBtn.classList.add('d-none')
    })

    function atLeastOneCheckboxIsChecked(){
        const checkboxes = Array.from(el.querySelectorAll(".check"));
        return checkboxes.reduce((acc, curr) => acc || curr.checked, false);
    }

    function CheckboxIsCheckedFalse(){
        check.forEach(el => {
            if(el.checked) {
                el.checked = !el.checked
                retrieveFilterValue()
            }
        })
    }
})


