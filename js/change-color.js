let colorProduct1 = document.getElementsByClassName("color-product")[0];
let colorProduct2 = document.getElementsByClassName("color-product")[1];
colorProduct1.addEventListener("click", () => {
    if(colorProduct2.classList.contains("active")){
        colorProduct2.classList.remove("active");
        colorProduct1.classList.add("active");
        document.getElementById("shirt-color").innerText = document.getElementById("black-blue").innerText;
    }
});
colorProduct2.addEventListener("click", () => {
    if(colorProduct1.classList.contains("active")){
        colorProduct1.classList.remove("active");
        colorProduct2.classList.add("active");
        document.getElementById("shirt-color").innerText = document.getElementById("black").innerText;
    }
});