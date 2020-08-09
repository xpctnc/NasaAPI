const searchContainer = document.querySelector('.search-container')
const search = document.querySelector('.search')
const searchInput = document.querySelector('.search-input')
const searchInputBorder = document.querySelector('.search-input-border')
const loader = document.querySelector('.lds')
const results = document.querySelector('.results')
const noResults = document.querySelector('.no-results')

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
    searchContainer.classList.add('search-active')
    search.classList.add('search-active')
    searchInput.classList.add('search-active')
})

const api = 'https://images-api.nasa.gov/'



searchInput.addEventListener('keyup', debounce(e => {



    let resultsArr = new Array();

    results.childNodes.length > 0 && searchInput.value.length > 0 ?  removeAllChildNodes(results) : '';

    if(searchInput.value.length > 0) {

        loader.classList.add('loading');


        fetch(`${api}search?q=${searchInput.value}&media_type=image`)
            .then(response => response.json())
            .then(response => {

                resultsArr = response.collection.items



                resultsArr.forEach(item => {

                    const imageItem = document.createElement('div')
                    imageItem.classList.add('item')
                    imageItem.style.backgroundImage = `url('${item.links[0].href}')`
                    results.appendChild(imageItem)


                })



                loader.classList.remove('loading')



                resultsArr.length === 0 ? noResults.textContent = 'no results' : '';

// 100vh searchinput///



            })
            .catch((err) => console.log(err));

        noResults.textContent = '';

    }


},1000))

