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

const sections = document.querySelector('.sections');
let pop = "";
const sectionsCard = [
  {
    title: 'Tonic',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: '/images/Snapshoot Portfolio.png',
  },

  {
    title: 'Multi-Post Stories',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: './images/Snapshoot Portfolio1.png',
  },
  {
    title: 'Tonic',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: './images/Snapshoot Portfolio2.png',
  },
  {
    title: 'Multi-Post Stories',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: './images/Snapshoot Portfolio3.png',
  },
];



sectionsCard.forEach((data) => {
  pop += `<div id="w2" class="work1">
  <div class="work1Discription" id="w2work1Discription">
    <h2>
      <span id="w2d">${data.title}</span>
    </h2>
    <div class="pop-up-image">${data.image}</div>
    <p>
    ${data.description}
    </p>
    <ul class="category">
      <li>${data.technology[0]}</li>
      <li>${data.technology[1]}</li>
      <li>${data.technology[2]}</li>
    </ul>
  </div>
  <p class="title" hidden>${data.title}</p>
  <p class="description" hidden>${data.description}</p>
  <p class="livelink" hidden>${data.liveLink}</p>
  <p class="sourcelink" hidden>${data.sourceLink}</p>
  <button class="btn1" id="w2button">See Project</button>
</div>`;
  sections.innerHTML = pop;
});

const container = document.querySelector('.work-cards');
const recent = document.querySelector('.Recentwork1');
const closeIcon = document.querySelector('.crossimg');
const css = document.querySelector('.css-display');
const multiProject = document.querySelector('.button');
const title = document.querySelector('.recent-title');
const description = document.querySelector('.recent-description');
const liveLink = document.querySelector('.live');
const sourceLink = document.querySelector('.source');

const button = container.querySelectorAll('.btn1');
const recentTitle = container.querySelectorAll('.title');
const recentDescription = container.querySelectorAll('.description');
const recentlivelink = container.querySelectorAll('.livelink');
const recentsourcelink = container.querySelectorAll('.sourcelink');

for (let i = 0; i < button.length; i += 1) {
  button[i].addEventListener('click', () => {
    title.textContent = recentTitle[i].innerHTML;
    description.textContent = recentDescription[i].innerHTML;
    liveLink.sourceLink = recentlivelink[i].outerHTML;
    sourceLink.sourceLink = recentsourcelink[i].outerHTML;

    recent.classList.add('active');
  });
}
closeIcon.addEventListener('click', () => {
  css.classList.remove('show');
  recent.classList.remove('active');
});

multiProject.addEventListener('click', () => {
  css.classList.add('show');
  recent.classList.add('active');
});


const popUp = (info) => {
  debugger;
  const popUpContainer = document.createElement('section');
  popUpContainer.id = "pop-up-main";
  popUpContainer.innerHTML = `<div class="pop-content">
    <div class="pop-up-header">
      <h1 class="section-title">${info.title}</h1>
      <button id="closing-btn-pop">
        <i class="fa-solid fa-xmark menu-bar" id="btn"></i>
      </button>
    </div>
    <div class="pop-up-image"></div>
    <div class="pop-up-content">
      <p class="pop-up-description"></p>
      <ul class=""></ul>
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