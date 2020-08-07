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

searchInput.addEventListener('keyup', debounce(e =>{
    console.log(searchInput.value.length)
    searchBox.classList.add('loadingItems')
    if(searchInput.value.length === 0) {
        searchInput.blur();
        searchBox.classList.remove('loadingItems')

    }
},1500))

// searchInput.addEventListener('keyup', () => {
//
//     let loading = true;
//
//     const inputValue = () => {
//         const query = searchInput.value;
//         console.log(query)
//         loading = false
//         //!loading ? searchBox.classList.add('itemsLoaded') : '';
//     }
//     //const query = searchInput.value
//     //console.log(query)
//     // fetch(`${api}search?q=${query}&media_type=image`)
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         itemsLoaded = true;
//     //         itemsLoaded ? searchBox.classList.add('itemsLoaded') : '';
//     //         console.log(data);
//     //
//     //     })
//
// })



