const upBtn = document.getElementById("up");

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

upBtn.addEventListener("click", backToTop);


