let valueSearch = document.getElementById('search-product');
let iconSearch = document.getElementById('icon-search-product');
iconSearch.addEventListener("click", (e) => {
    if (valueSearch.value !== '') {
        iconSearch.href = './searchcorrect.html';
    } else {
        iconSearch.href = './dissearch.html';
    }
})