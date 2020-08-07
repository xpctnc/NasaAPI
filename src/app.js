const searchBox = document.querySelector('.searchBox')
const searchInput = document.querySelector('.searchInput')
const searchInputBorder = document.querySelector('.searchInputBorder')

searchInput.addEventListener('keyup', () => {
    searchInput.value != '' ? searchInputBorder.classList.add('active') : searchInputBorder.classList.remove('active')

})

const api = 'https://images-api.nasa.gov/'

const debounce = (fn, delay) => {
    let timeOutId;
    return function(...args) {
        clearTimeout(timeOutId)
        timeOutId = setTimeout(() => fn(...args), delay);
    }
}

searchInput.addEventListener('focus', () => {
    searchBox.classList.add('moveToTop')
})

searchInput.addEventListener('keyup', debounce(e => {
    let state = 1;


    let results = new Array();

    fetch(`${api}search?q=${searchInput.value}&media_type=image`)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            results = response.collection.items

        })
        .catch((err) => console.log(err));

},1000))


// fetch(`${api}search?q=${query}&media_type=image`)
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         itemsLoaded = true;
//     //         itemsLoaded ? searchBox.classList.add('itemsLoaded') : '';
//     //         console.log(data);
//     //
//     //     })
