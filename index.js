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
      mobileTopic: "tonic",
      desktopTopic: "tonic",
      mobileImage: "images/Snapshoot Portfolio.png",
      desktopImage: "images/desktop-port/new.png",
  },
  {
      mobileTopic: "multi-post stories",
      desktopTopic: "multi-post stories",
      mobileImage: "images/Snapshoot Portfolio (1).png",
      desktopImage: "images/desktop-port/new.png",
  },
  {
      mobileTopic: "tonic",
      desktopTopic: "facebook 360",
      mobileImage: "images/Snapshoot Portfolio (2).png",
      desktopImage: "images/desktop-port/new.png",
  },
  {
      mobileTopic:  "multi-post stories",
      desktopTopic: "uber navigation",
      mobileImage: "images/Snapshoot Portfolio (3).png",
      desktopImage: "images/desktop-port/new.png",
  }
]
