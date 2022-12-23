const hamburger = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');
const panel = document.querySelector('.panel');
const cancel = document.querySelector('#cancel-panel');

hamburger.addEventListener('click', () => {
  menu.classList.add('absolute');
});

cancel.addEventListener('click', () => {
  menu.classList.remove('absolute');
});

panel.addEventListener('click', () => {
  menu.classList.remove('absolute');
});

const array = [
  {
    mobileTopic: 'tonic',

    desktopTopic: 'tonic',

    mobileImage: 'images/Snapshoot Portfolio.png',

    desktopImage: 'images/desktop-port/new.png',

    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type 
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,

    link: 'https://tobby8629.github.io/Tobby-portfolio/',

    source: 'https://github.com/Tobby8629/Tobby-portfolio',
  },
  {
    mobileTopic: 'multi-post stories',

    desktopTopic: 'multi-post stories',

    mobileImage: 'images/Snapshoot Portfolio (1).png',

    desktopImage: 'images/desktop-port/second.png',

    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type 
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,

    link: 'https://tobby8629.github.io/Tobby-portfolio/',

    source: 'https://github.com/Tobby8629/Tobby-portfolio',
  },
  {
    mobileTopic: 'tonic',

    desktopTopic: 'facebook 360',

    mobileImage: 'images/Snapshoot Portfolio (2).png',

    desktopImage: 'images/desktop-port/third.png',

    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type 
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,

    link: 'https://tobby8629.github.io/Tobby-portfolio/',

    source: 'https://github.com/Tobby8629/Tobby-portfolio',
  },
  {
    mobileTopic: 'multi-post stories',

    desktopTopic: 'uber navigation',

    mobileImage: 'images/Snapshoot Portfolio (3).png',

    desktopImage: 'images/desktop-port/fourth.png',

    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
      1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type 
      and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,

    link: 'https://tobby8629.github.io/Tobby-portfolio/',

    source: 'https://github.com/Tobby8629/Tobby-portfolio',
  },
];

const extra = document.querySelector('#extra');
const project = document.querySelectorAll('#expand');

function display(main, i) {
  const play = `<div class="content">
      <div class="top">
        <h2 class="mobile">${main[i].mobileTopic}</h2>
        <h2 class="desktop">${main[i].desktopTopic}</h2>
        <ul>
          <li class="dark desktop">Uber</li>
          <li class="dark mobile">canopy</li>
          <li class="desktop">full Stack Dev</li>
          <li class="mobile">Back End Dev</li>
          <li class="desktop">2018</li>
          <li class="mobile">2015</li>
        </ul>
      </div>
      <div class="image">
        <img src="${main[i].mobileImage}"  class="mobile"/>
        <img src="${main[i].desktopImage}" class="desktop"/>
      </div>
      <div class="bottom">
        <div class="words">
          <p class="desktop">
            ${main[i].desktopdesc}
          </p>

          <p class="mobile">
            ${main[i].mobiledesc}
          </p>
        </div>
         
        <div class="other">
          <ul class="stack">
            <li>html</li>
            <li>javascript</li>
            <li class="desktop">ruby </li>
            <li>css</li>
            <li class="desktop">github</li>
            <li class="desktop">bootstrap</li>
          </ul>
  
          <div class="button">
            <a href="${main[i].link}" class="btn">
              see live
              <img src="images/expand/seelive.png" alt="visit the website"/>
            </a>
            <a href="${main[i].source}" class="btn">
              see source
              <img src="images/expand/seesource.png" alt=" see the sourcecode"/>
            </a>
          </div>
        </div>
        
        

        <img src="images/expand/cancel.png" alt="To close panel" id="cancel-port"/>
        
      </div>`;

  const lay = document.createElement('div');
  lay.classList.add('popup');
  lay.innerHTML = play;
  extra.appendChild(lay);
}

project.forEach((pro, index) => {
  pro.addEventListener('click', () => {
    const v = index;
    for (let i = 0; i < array.length; i += 1) {
      if (i === v) {
        display(array, i);
        const view = document.querySelector('.popup');
        view.classList.add('show');
        const canc = view.querySelector('#cancel-port');
        canc.addEventListener('click', () => {
          extra.removeChild(view);
        });
      }
    }
  });
});

const input = document.querySelectorAll('#port-form input')
const form = document.querySelector('#port-form');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const conditions = document.querySelector('.conditions');

function checker(val) {
  return /[A-Z]/.test(val)
}

form.addEventListener('submit',(e)=>{
  input.forEach((input) => {
    let value = email.value;
    let balance = checker(value);
    if (balance || input.value === '' || message.value.length < 10) {
      e.preventDefault();
      conditions.style.display = 'block'
    }   
  })
})
