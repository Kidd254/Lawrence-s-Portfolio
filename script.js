let menuBox= document.getElementById("menu");
let menuBar= document.getElementById("menu_bar");
let closingBtn = document.getElementById("btn");
menuBar.onclick= function(){
    menuBox.style.display = "block";
    menuBox.classList.toggle("open-menu")
}