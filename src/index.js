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

function showDefaultImage(img) {
  img.classList.add('appear');
}

showDefaultImage(img1);

forwardArrow.addEventListener('click', showNextImage);
backwardArrow.addEventListener('click', showPreviousImage);

function showNextImage(dataKey) {
  for (let i = 0; i < images.length; i++) {
    if (images[i].zIndexJS === 1) {
      const indexOfOldImage = images.indexOf(images[i]);
      const oldImage = images[indexOfOldImage];
      const oldImageHTML = oldImage.name;
      oldImage.zIndexJS = 0;
      oldImageHTML.style.zIndex = '0';
      oldImageHTML.classList.add('disappear');
      oldImageHTML.classList.remove('appear');

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
      nextImageHTML.classList.remove('disappear');
      nextImageHTML.classList.add('appear');
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
      oldImageHTML.classList.add('disappear');
      oldImageHTML.classList.remove('appear');

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
      nextImageHTML.classList.remove('disappear');
      nextImageHTML.classList.add('appear');
      return;
    }
  }
}
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
