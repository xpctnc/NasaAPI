
const searchInput = document.querySelector('.searchInput')
const searchInputBorder = document.querySelector('.searchInputBorder')
const searchButton = document.querySelector('.searchButton')

searchInput.addEventListener('keyup', () => {
    searchInput.value != '' ? searchInputBorder.classList.add('active') : searchInputBorder.classList.remove('active')

})

const api = 'https://images-api.nasa.gov/'

searchButton.addEventListener('click', () => {
    const query = searchInput.value
    fetch(`${api}search?q=${query}&media_type=image`).then(res => res.json()).then(data => console.log(data))
})
