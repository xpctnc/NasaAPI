const searchContainer = document.querySelector('.searchContainer')
const search = document.querySelector('.search')
const searchInput = document.querySelector('.searchInput')
const searchInputBorder = document.querySelector('.searchInputBorder')
const results = document.querySelector('.results')

searchInput.addEventListener('keyup', () => {
    searchInput.value != '' ? searchInputBorder.classList.add('active') : searchInputBorder.classList.remove('active')

})

const debounce = (fn, delay) => {

    let timeOutId;
    return function(...args) {
        clearTimeout(timeOutId)
        timeOutId = setTimeout(() => fn(...args), delay);
    }
}
searchInput.addEventListener('focus', () => {
    search.classList.add('searchActive')
    searchContainer.classList.add('searchActive')
})

const api = 'https://images-api.nasa.gov/'
searchInput.focus();
searchInput.addEventListener('keyup', debounce(e => {
    let state = 1;

    let resultsArr = new Array();

    fetch(`${api}search?q=${searchInput.value}&media_type=image`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            resultsArr = response.collection.items
            console.log(resultsArr)
            resultsArr.forEach(item => {
                let imageItem = document.createElement('div')
                imageItem.classList.add('item')
                imageItem.style.backgroundImage = `url('${item.links[0].href}')`
                //images.appendChild(imageItem)
                console.log(`${item.links[0].href}`)
            })


        })
        .catch((err) => console.log(err));

},1000))
