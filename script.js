let menuBox= document.getElementById("menu");
let menuBar= document.getElementById("menu_bar");
let closingBtn = document.getElementById("btn");
let menuItems = document.getElementsByClassName("h-menu");

menuBar.onclick= function(){
    menuBox.style.display = "block";
    menuBox.classList.toggle("open-menu");
}

menuItems.onclick= function(){
    menuBox.style.display = "none";
    menuBox.classList.toggle("open-menu");
}

closingBtn.onclick= function(){
    menuBox.style.display = "none";
    menuBox.classList.toggle("open-menu");
}