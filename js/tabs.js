function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}


const tabDropDown = document.querySelector('.is-mobile')
const tabLinks = document.querySelectorAll('.tablinks')

tabDropDown.addEventListener('change', (e) => {
    openTab(event, tabDropDown.value)
})


tabLinks.forEach(el => {
    el.addEventListener('click', () => {
        openTab(event, el.value)
    })
})


document.getElementById("defaultOpen").click()