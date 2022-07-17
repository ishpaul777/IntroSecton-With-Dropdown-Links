

const toggleMenuBtn = document.querySelector('#toggle-menu')
const closeMenuBtn = document.querySelector('#close-btn')
const mobileMenu = document.querySelector('.mobile-menu')
const overlay = document.querySelector('.overlay')
const toggleDropdownMenu = document.querySelectorAll('.menu-item .item')

console.log(toggleDropdownMenu)
toggleMenuBtn.addEventListener('click',()=> {
mobileMenu.classList.add('active')
overlay.classList.add('active')

})


closeMenuBtn.addEventListener('click',()=> {
    mobileMenu.classList.remove('active')
    overlay.classList.remove('active')
})

toggleDropdownMenu.forEach((menu) => {
    menu.addEventListener('click', ()=> {
        menu.parentElement.children[1].classList.toggle('active')
        menu.children[0].classList.toggle('bi-chevron-down')
        menu.children[0].classList.toggle('bi-chevron-up')
    })
})


