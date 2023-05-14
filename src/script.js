// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new bootstrap.Collapse(menuToggle)

// addEventListener('click', () => {
//     bsCollapse.style.backgroundColor = "#FFF";
// })

const menuToggle = document.getElementsByClassName("navbar-toggler");

menuToggle.addEventListener('click', () => {
    document.getElementById("navbarContainer").style.backgroundColor = "#FFF"; 
})

console.log("AAA");