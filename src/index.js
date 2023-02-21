import _ from 'lodash';
import './style.css';

const navBtn = document.querySelectorAll('.nav-btn');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
let navBarClicked = false;

const images = [
  {
    name: img1,
    zIndexJS: 1,
  },
  {
    name: img2,
    zIndexJS: 0,
  },
  {
    name: img3,
    zIndexJS: 0,
  },
  {
    name: img4,
    zIndexJS: 0,
  },
  {
    name: img5,
    zIndexJS: 0,
  },
];

const backwardArrow = document.getElementById('arrow-backward');
const forwardArrow = document.getElementById('arrow-forward');

function showNextImage(dataKey) {
  for (let i = 0; i < images.length; i++) {
    if (images[i].zIndexJS === 1) {
      const indexOfOldImage = images.indexOf(images[i]);
      const oldImage = images[indexOfOldImage];
      const oldImageHTML = oldImage.name;
      oldImage.zIndexJS = 0;
      oldImageHTML.style.zIndex = '0';
      oldImageHTML.setAttribute('class', 'img left');

      let indexOfNextImage = indexOfOldImage + 1;

      if (navBarClicked === true) {
        indexOfNextImage = dataKey;
        navBarClicked = false;
      }

      let nextImage = images[indexOfNextImage];

      if (indexOfNextImage === images.length) {
        indexOfNextImage = 0;
        nextImage = images[0];
      }

      navBtn.forEach((btn) => {
        const dataKey = Number(btn.getAttribute('data-key'));
        if (dataKey === indexOfNextImage) {
          navBtn.forEach((x) => {
            if (x.classList.contains('clicked')) {
              x.classList.remove('clicked');
            }
          });
          btn.classList.add('clicked');
        }
      });

      const nextImageHTML = nextImage.name;
      nextImage.zIndexJS = 1;
      nextImageHTML.style.zIndex = '1';
      nextImageHTML.setAttribute('class', 'img center');

      if (nextImageHTML.id === 'img1') {
        img1.setAttribute('class', 'img center');
        img2.setAttribute('class', 'img right');
        img3.setAttribute('class', 'img right');
        img4.setAttribute('class', 'img right');
        img5.setAttribute('class', 'img right');
      }
      return;
    }
  }
}

function showPreviousImage() {
  for (let i = 0; i < images.length; i++) {
    if (images[i].zIndexJS === 1) {
      const indexOfOldImage = images.indexOf(images[i]);
      const oldImage = images[indexOfOldImage];
      const oldImageHTML = oldImage.name;
      oldImage.zIndexJS = 0;
      oldImageHTML.style.zIndex = '0';
      oldImageHTML.setAttribute('class', 'right');

      let indexOfNextImage = indexOfOldImage - 1;
      let nextImage = images[indexOfNextImage];

      if (indexOfNextImage === -1) {
        indexOfNextImage = images.length - 1;
        nextImage = images[images.length - 1];
      }

      navBtn.forEach((btn) => {
        const dataKey = Number(btn.getAttribute('data-key'));
        if (dataKey === indexOfNextImage) {
          navBtn.forEach((x) => {
            if (x.classList.contains('clicked')) {
              x.classList.remove('clicked');
            }
          });
          btn.classList.add('clicked');
        }
      });

      const nextImageHTML = nextImage.name;
      nextImage.zIndexJS = 1;
      nextImageHTML.style.zIndex = '1';
      nextImageHTML.setAttribute('class', 'center');

      if (nextImageHTML.id === 'img5') {
        img1.setAttribute('class', 'img left');
        img2.setAttribute('class', 'img left');
        img3.setAttribute('class', 'img left');
        img4.setAttribute('class', 'img left');
        img5.setAttribute('class', 'img center');
      }
      return;
    }
  }
}

forwardArrow.addEventListener('click', showNextImage);
backwardArrow.addEventListener('click', showPreviousImage);

// setInterval(showNextImage, 5000);

navBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    navBtn.forEach((x) => {
      if (x.classList.contains('clicked')) {
        x.classList.remove('clicked');
      }
    });
    const dataKey = Number(btn.getAttribute('data-key'));
    navBarClicked = true;
    showNextImage(dataKey);
    btn.classList.add('clicked');
  });
});
