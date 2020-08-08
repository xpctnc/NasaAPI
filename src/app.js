const searchContainer = document.querySelector('.searchContainer')
const search = document.querySelector('.search')
const searchInput = document.querySelector('.searchInput')
const searchInputBorder = document.querySelector('.searchInputBorder')
const loader = document.querySelector('.lds')
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

const removeAllChildNodes = el => {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

searchInput.addEventListener('focus', () => {
    searchContainer.classList.add('searchActive')
    search.classList.add('searchActive')
    searchInput.classList.add('searchActive')
    loader.classList.add('searchActive')
})

const api = 'https://images-api.nasa.gov/'
searchInput.addEventListener('keyup', debounce(e => {

    let resultsArr = new Array();

    if(searchInput.value.length > 0) {
        fetch(`${api}search?q=${searchInput.value}&media_type=image`)
            .then(response => response.json())
            .then(response => {
                resultsArr = response.collection.items

                console.log(resultsArr)

                results.childNodes.length > 0 ? removeAllChildNodes(results) : '';

                resultsArr.forEach(item => {

                    const imageItem = document.createElement('div')
                    imageItem.classList.add('item')
                    imageItem.style.backgroundImage = `url('${item.links[0].href}')`
                    results.appendChild(imageItem)


                })




            })
            .catch((err) => console.log(err));


    }



},500))

