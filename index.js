function openMenu() {
    document.body.classList += " menu--open" /* lo spazio serve per staccare l'eventuale altra classe se c'è */
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}