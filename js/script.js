/* ================= Script Here ================= */
let btnMinus = document.getElementsByClassName("minus")[0];
let btnAdd = document.getElementsByClassName("add")[0];
let iptNumber = document.getElementById("numbers-product");
let textPrice = document.getElementById("price");
let totaltext = document.getElementById("total");

let x = 305.550;

btnMinus.addEventListener("click",(e) => {
    e.preventDefault()
    if(iptNumber.value >= 2){
        iptNumber.value = "" + (Number(iptNumber.value) - 1);
        textPrice.innerText = "" + (x * Number(iptNumber.value)).toFixed(3) + " vnđ";
        totaltext.innerText = textPrice.innerText;
    }
    // if(iptNumber.value == 0){
    //     inforBasket.classList.add("hidden-infor-basket");
    //     backHomepage.classList.remove("hidden-back-homepage");
    // }
})
btnAdd.addEventListener("click", (e)=>{
    e.preventDefault()

    iptNumber.value = "" + (Number(iptNumber.value) + 1);
    textPrice.innerText = "" + (x * Number(iptNumber.value)).toFixed(3) + " vnđ";
    totaltext.innerText = textPrice.innerText;
})






