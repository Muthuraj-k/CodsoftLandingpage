window.addEventListener('scroll',function(){
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle("sticky")
})

const toggleicon = document.querySelector('.toggle')
const menulist = document.querySelector('ol')

function Toggleall() {
    toggleicon.classList.toggle("active")
    menulist.classList.toggle("active")
}