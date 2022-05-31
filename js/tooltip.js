const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
    new bootstrap.Tooltip(t)
})


const cartItem = document.querySelectorAll('.cardPage-left-content-item')

cartItem.forEach(el => {
    const quantity = el.querySelector('.cardPage-left-content-item-data-quant');
    const btnPlus = el.querySelector('.plus');
    const btnMinus = el.querySelector('.minus');

    quantity.innerHTML = "1"
    let count = 1


    btnPlus.addEventListener('click', () => {
        count += 1;
        quantity.innerHTML = String(count)
    })

    btnMinus.addEventListener('click', () => {
        count -= 1;
        if (count <= 0) {
            count = 0
            quantity.innerHTML = String(count)
            return count
        }

        quantity.innerHTML = String(count)
    })
})
