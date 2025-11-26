const menu = document.querySelector('#days')
// const menuLink = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('active')
    print("clicked")
    // menuLink.classList.toggle('active')
})