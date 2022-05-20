const menuOpenBtn = document.querySelector('.header_bottom_container_left_wrap');
const overlay = document.querySelector('.overlay');


menuOpenBtn.addEventListener("mouseover", function(  ) {
    overlay.style.display = "block";
});

menuOpenBtn.addEventListener("mouseout", function(  ) {
    overlay.style.display = "none";
});