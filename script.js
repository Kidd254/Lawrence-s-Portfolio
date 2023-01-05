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

const popDisplay= document.getElementById('pop');

popDisplay.addEventListener('click', ()=>{
popUp(sectionsCard[0]);
});
const sections = document.querySelector('.sections');
let pop = "";
const sectionsCard = [
  {
    title: 'Tonic',
    list: ['Canopy', 'Back end Dev', '2015'],
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: '/images/Snapshoot Portfolio.png',
  },

  {
    title: 'Multi-Post Stories',
    list: ['Canopy', 'Back end Dev', '2015'],
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: './images/Snapshoot Portfolio1.png',
  },
  {
    title: 'Tonic',
    list: ['Canopy', 'Back end Dev', '2015'],
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: './images/Snapshoot Portfolio2.png',
  },
  {
    title: 'Multi-Post Stories',
    list: ['Canopy', 'Back end Dev', '2015'],
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: './images/Snapshoot Portfolio3.png',
  },
];

const popUp = (info) => {
  const popUpContainer = document.createElement('section');
  popUpContainer.id = "pop-up-main";
  popUpContainer.innerHTML = `<div class="pop-content">
    <div class="pop-up-header">
      <h1 class="section-title">${info.title}</h1>
      <button id="closing-btn-pop">
        <i class="fa-solid fa-xmark menu-bar" id="btn"></i>
      </button>
      <ul>
      <li>Canopy</li>
      <li>Back End Dev</li>
      <li>2015</li>
      </ul>
    </div>
    <div class="pop-up-image"><img src="${info.image}"></div>
    <div class="pop-up-content">
      <p class="pop-up-description">${info.description}</p>
      <ul class="">
      </p>
    <ul class="category">
      <li>${info.technology[0]}</li>
      <li>${info.technology[1]}</li>
      <li>${info.technology[2]}</li>
    </ul>
      </ul>
    </div>
    <div class="pop-up-buttons"></div>
  </div>
  `;

  
  document.body.appendChild(popUpContainer);
  const closingBtn = document.getElementById('closing-btn-pop');
  closingBtn.addEventListener('click', () => {
    popUpContainer.remove();
  })
};