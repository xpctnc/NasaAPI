const searchInput = document.querySelector('.searchInput')
const searchInputBorder = document.querySelector('.searchInputBorder')

searchInput.addEventListener('keyup', () => {
    searchInput.value != '' ? searchInputBorder.classList.add('active') : searchInputBorder.classList.remove('active')
})
