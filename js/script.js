let mobnav = document.querySelector("#mobnav");
let menu_btn = document.querySelector("#menu_btn");
let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
let line3 = document.querySelector("#line3");


menu_btn.addEventListener("click", function () {
    mobnav.classList.toggle("left-[0%]");
    mobnav.classList.toggle("left-[100%]");

    line1.classList.toggle("rotate-down")
    line2.classList.toggle('hide');
    line3.classList.toggle("rotate-up")
     
    
  })