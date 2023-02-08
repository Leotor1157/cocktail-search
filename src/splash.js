export function displaySearchBar() {
    const splash = document.querySelector('.splash-container')
    splash.classList.add('mini')
    const searchBar = document.querySelector('.search-bar')
    searchBar.classList.add('active')
    splash.removeEventListener('click', displaySearchBar)
}