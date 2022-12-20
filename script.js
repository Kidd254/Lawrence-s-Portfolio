let menuBox= document.getElementById("menu");
let menuBar= document.getElementById("menu_bar");
let closingBtn = document.getElementById("btn");
let menuItems = document.getElementsByClassName("h-menu");
let menuContainer = document.getElementsByClassName("menu-items");

menuBar.onclick= function(){
    menuBox.style.display = "flex";
    menuBox.classList.toggle("open-menu");
    menuBar.style.display= "none";
    closingBtn.style.display="block";
    menuContainer[0].style.display="block";
}

for(let i=0; i<menuItems.length; i++){
    menuItems[i].onclick= function(){
        menuBox.style.display = "none";
        menuBox.classList.toggle("open-menu");
        closingBtn.style.display="none";
        menuBar.style.display= "block";
        menuContainer[0].style.display="none";
    }
}

closingBtn.onclick= function(){
    menuBox.style.display = "none";
    menuBox.classList.toggle("open-menu");
    menuBar.style.display= "block";
    closingBtn.style.display="none";
    menuContainer[0].style.display="none";
}

