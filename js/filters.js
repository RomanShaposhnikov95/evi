let clearBtn = document.querySelector(".clearBtn");


clearBtn.addEventListener('click', () => {
    console.log('click')
})



let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");
let range = document.querySelector(".slider-range > .range");


let minInput = document.getElementById("min");
let maxInput = document.getElementById("max");

function setLeftValue() {
    let _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(
        parseInt(_this.value),
        parseInt(inputRight.value) - 1
    );
    minInput.value = `${_this.value}`;

    let percent = ((_this.value - min) / (max - min)) * 100;


    range.style.left = percent + "%";
}

setLeftValue();

function setRightValue(maxNum) {

    console.log(parseInt(maxNum))
    let _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(
        parseInt(_this.value),
        parseInt(inputLeft.value) + 1
    );

    let percent = ((_this.value - min) / (max - min)) * 100;

    range.style.right = 100 - percent + "%";
    maxInput.value = `${_this.value}`;
}

setRightValue();

maxInput.addEventListener('input', (e) => {
    setRightValue(e.currentTarget.value)

})

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", (e) => {
    inputLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", (e) => {
    inputLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", (e) => {
    inputLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", (e) => {
    inputLeft.classList.remove("active");
});
inputLeft.addEventListener("touchstart", (e) => {
    inputLeft.classList.add("active");
});
inputLeft.addEventListener("touchend", (e) => {
    inputLeft.classList.remove("active");
});
inputRight.addEventListener("mouseover", (e) => {
    inputRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", (e) => {
    inputRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", (e) => {
    inputRight.classList.add("active");
});
inputRight.addEventListener("mouseup", (e) => {
    inputRight.classList.remove("active");
});
inputRight.addEventListener("touchstart", (e) => {
    inputRight.classList.add("active");
});
inputRight.addEventListener("touchend", (e) => {
    inputRight.classList.remove("active");
});
