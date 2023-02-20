// mobile menu show and hide Toggle

// let menuItems=document.getElementById("menuitems");
// menuItems.style.maxHeight="0px";


// function  menuToggle(){
//     if(menuItems.style.maxHeight=="0px"){
//         menuItems.style.maxHeight="800px";
//     }
//     else {
//         menuItems.style.maxHeight="0px";
//     }
// }
// mobile menu show and hide Toggle
let menuIcon=document.querySelector('.menuicon');
let menuItems=document.querySelector('.menum');

menuIcon.addEventListener('click', function(){
   menuItems.classList.toggle('is-active'); 
}
   
)


// product image

function changeImage(event){
   document.getElementById("productImg").src= event.src;
}

// Toggle Form




// regForm.addEventListener('click',function (){
//    loginForm.classList.toggle('loginformm'); 
// })
// loginForm.addEventListener('click',function (){
//    regForm.style.transform = "transalateX(300px)";
//    loginForm.style.transform = "transalateX(300px)";
// })
