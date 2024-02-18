// ANNEE FOOTER

let year = document.querySelector('.year')
let date = new Date()
let newyear = date.getFullYear()

year.textContent = newyear




//Img survol

const subImages = document.querySelectorAll('.productimg img');

const mainImage = document.querySelector('.mainimg');


subImages.forEach((subImage, index) => {
    subImage.addEventListener('mouseover', function () {
        mainImage.src = `/assets/img/${index + 1}.png`;
    });

    subImage.addEventListener('mouseout', function () {
        mainImage.src = '/assets/img/1.png';
    });
});




// IMG MEDIA QUERY

let buttonright = document.querySelector('.arrowright')
let buttonleft = document.querySelector('.arrowleft')
let n = 1


buttonright.addEventListener('click', function(){
    n += 1;
    if(n == 5){
        n = n - 4;
    }
    mainImage.src = `/assets/img/${n}.png`;
    


})

buttonleft.addEventListener('click', function(){
    n -= 1;
    if(n == 0){
        n = n + 4
    };
    mainImage.src = `/assets/img/${n}.png`;
})






// Incrémentation

let quantity = document.querySelector(".quantity p");
let plus = document.querySelector("#more");
let moins = document.querySelector('#less');

plus.addEventListener('click', function (){
    let newquantity = Number(quantity.textContent);
    newquantity += 1;
    quantity.textContent = newquantity;
});




moins.addEventListener('click', function(){
    let lessquantity = Number(quantity.textContent);
    lessquantity -= 1;
    if(lessquantity >= 0){
        quantity.textContent = lessquantity;
    }else{
        alert('Error, vous ne pouvez pas avoir moins de 0 article')
        quantity.textContent = 0
    }
})



//POPUP

setTimeout(function() {
    popupAppear();
}, 10000);

function popupAppear() {
    document.getElementById("popup").style.display = "block";
    document.querySelector('.absoluteresponsive').style.position = "inherit";
    document.querySelector('.arrowleft').style.position = "inherit";
    document.querySelector('.arrowright').style.position = "inherit";
    document.querySelector('.arrowright i').style.color = 'white';
    document.querySelector('.arrowleft i').style.color = 'white';

}

function quitPopup() {
    document.getElementById("popup").style.display = "none";
    document.querySelector('.absoluteresponsive').style.position = "relative";
    document.querySelector('.arrowleft').style.position = "absolute";
    document.querySelector('.arrowright').style.position = "absolute";
    document.querySelector('.arrowright i').style.color = '#1D2026';
    document.querySelector('.arrowleft i').style.color = '#1D2026';



}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        quitPopup();
    }
});

function receivemail() {
    let email = document.getElementById("emailInput").value;
    console.log(email);
    quitPopup();
}











// MENU HBRG

let hamburger = document.getElementById('hamburger')
let menuphone = document.querySelector('#phone-menu')

hamburger.addEventListener('click', function(){
    menuphone.classList.toggle('affiche');  
    hamburger.classList.toggle('rotate');  
})

menuphone.addEventListener('click', function(){
    menuphone.classList.toggle('affiche');
    hamburger.classList.toggle('rotate');
})









