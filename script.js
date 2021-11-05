// const toggle = document.querySelector('.toggle')
// const navigation = document.querySelector('.navigation')

// toggle.addEventListener('click', () => {
//   toggle.classList.toggle('active')
//   navigation.classList.toggle('active')
// })

// function toggle(){
//   let menuOpen = document.querySelector('.toggler').checked;
// if(menuOpen = true){
//           document.querySelector('.toggler').checked = false;
//       }
// }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}