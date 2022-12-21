/* eslint-disable linebreak-style */
const menuBox= document.getElementById('menu');
const menuBar= document.getElementById('menu_bar');
const closingBtn = document.getElementById('btn');
const menuItems = document.getElementsByClassName('h-menu');
const menuContainer = document.getElementsByClassName('menu-items');

menuBar.addEventListener('click', ()=>{
  menuBox.style.display = 'flex';
  menuBox.classList.toggle('open-menu');
  menuBar.style.display= 'none';
  closingBtn.style.display='block';
  menuContainer[0].style.display='block';
});

for (let i=0; i<menuItems.length; i++) {
  menuItems[i].onclick= function() {
    menuBox.style.display = 'none';
    menuBox.classList.toggle('open-menu');
    closingBtn.style.display='none';
    menuBar.style.display= 'block';
    menuContainer[0].style.display='none';
  };
}

closingBtn.addEventListener('click', ()=>{
  menuBox.style.display = 'none';
  menuBox.classList.toggle('open-menu');
  menuBar.style.display= 'block';
  closingBtn.style.display='none';
  menuContainer[0].style.display='none';
});
