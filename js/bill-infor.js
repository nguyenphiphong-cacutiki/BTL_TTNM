let Domestic = document.getElementById("domestic");
let Inter = document.getElementById("inter");
Domestic.addEventListener("click", function() {
    Inter.checked = false;
});

Inter.addEventListener("click", function() {
    Domestic.checked = false;
});

let FirstName = document.getElementById("first-name");
let LastName = document.getElementById("last-name");
let Phone = document.getElementById("phone");
let City = document.getElementById("city");
let District = document.getElementById("district");
let Ward = document.getElementById("ward");
let Address = document.getElementById("address");
let ErrorFirstName = document.getElementById("error-first-name");
let ErrorLastName = document.getElementById("error-last-name");
let ErrorPhone = document.getElementById("error-phone");
let ErrorCity = document.getElementById("error-city");
let ErrorDistrict = document.getElementById("error-district");
let ErrorWard = document.getElementById("error-ward");
let ErrorAddress = document.getElementById("error-address");
let ErrorPay = document.getElementById("error-pay");
let ErrorMethod = document.getElementById("error-method");
let Completed =  document.getElementsByClassName("completed")[0];
let LinkCompleted = document.querySelector("a.link-completed");

Completed.addEventListener("click", () =>{
    if(FirstName.value === ""){
        ErrorFirstName.innerText = "Bạn chưa nhập họ!";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }else{
        ErrorFirstName.innerText = "";
    }
    if(LastName.value === ""){
        ErrorLastName.innerText = "Bạn chưa nhập tên!";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }else{
        ErrorLastName.innerText = "";
    }
    if(Phone.value === ""){
        ErrorPhone.innerText = "Bạn chưa nhập số điện thoại!";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }else{
        ErrorPhone.innerText = "";
    }
    if(City.value === ""){
        ErrorCity.innerText = "Bạn chưa nhập tỉnh / thành phố!";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }else{
        ErrorCity.innerText = "";
    }
    if(District.value === ""){
        ErrorDistrict.innerText = "Bạn chưa nhập quận / huyện!";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }else{
        ErrorDistrict.innerText = "";
    }
    if(Ward.value === ""){
        ErrorWard.innerText = "Bạn chưa nhập phường / xã!";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    } else{
        ErrorWard.innerText = "";
    }
    if(Address.value === ""){
        ErrorAddress.innerText = "Bạn chưa nhập địa chỉ!";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }else{
        ErrorAddress.innerText = "";
    }

    if(FirstName.value !== "" 
    && LastName.value !== "" 
    && Phone.value !== ""
    && City.value !== ""
    && District.value !== ""
    && Ward.value !== ""
    && Address.value !== ""){
        LinkCompleted.href = '../cart.html';
    }

})