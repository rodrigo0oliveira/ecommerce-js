const dropdownButton = document.getElementById("dropdown-menu");
const mobileMenu = document.getElementById("mobile-menu");

dropdownButton.addEventListener('click',()=>{
    mobileMenu.classList.toggle('hidden');
})