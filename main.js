import './style.css'

const navBTN = document.querySelector("#menu");
const menuBar = document.querySelector("#menubar");

navBTN.addEventListener('click', ()=>{
    const isExpanded = JSON.parse(navBTN.getAttribute('aria-expanded'));
    navBTN.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
})