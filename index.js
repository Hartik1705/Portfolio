const msg = document.getElementById("thanks");


function showMessage(){

  msg.innerHTML = "Thanks for reaching out!";

  setTimeout(function(){
    msg.innerHTML = "";
  },3000);

}

const b = document.getElementById("done");
b.addEventListener("click", showMessage);


//adding functionality to buttons

const open = document.querySelector(".ham.fas");
const close = document.querySelector(".cross.fas");

open.addEventListener("click", function(){

  const menu = document.getElementById("menu");


   menu.style.right = "0px";


})

close.addEventListener("click", function(){

  const menu = document.getElementById("menu");


   menu.style.right = "-200px";


})
