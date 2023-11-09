let inforBasket = document.getElementsByClassName("infor-basket")[0];
let backHomepage = document.getElementsByClassName("back-homepage")[0];
let closeProduct = document.getElementsByClassName("close-product")[0];
closeProduct.addEventListener("click", ()=>{
    inforBasket.classList.add("hidden-infor-basket");
        backHomepage.classList.remove("hidden-back-homepage");
})
