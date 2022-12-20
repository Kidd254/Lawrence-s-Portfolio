let menuBox= document.getElementbyId("menu");
let menuBar= document.getElementbyId("menu_bar");
menubar.onclick= function(){
menuBox.classlist.toggle("open-menu");
}