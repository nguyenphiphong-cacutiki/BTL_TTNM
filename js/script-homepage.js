let valueSearch = document.getElementById('search-product');
let iconSearch = document.getElementById('icon-search-product');
iconSearch.addEventListener("click", (e) => {
    if (valueSearch.value !== '') {
        iconSearch.href = './searchcorrect.html';
    } else {
        iconSearch.href = './dissearch.html';
    }
})


let sanpham = document.getElementById("mnsanpham");
let showmenusanpham = document.getElementsByClassName("menu_sanphan")[0]
let isHide = true;
sanpham.addEventListener("click", (e) => {
    e.preventDefault()
    if(isHide){
        showmenusanpham.classList.add("show_menu");
        showmenusanpham.classList.remove("hiden_menu");
        isHide = false;
    }else{
        showmenusanpham.classList.add("hiden_menu");
        showmenusanpham.classList.remove("show_menu");
        isHide = true;
    }
})
showmenusanpham.addEventListener("mouseleave", (e) => {
    e.preventDefault()
    showmenusanpham.classList.add("hiden_menu");
    showmenusanpham.classList.remove("show_menu");
    isHide = true;
})


let mntatcasanpham = document.getElementById("tatcasanpham");
mntatcasanpham.addEventListener("click", (e) => {
    mntatcasanpham.href = './searchcorrect.html';
})