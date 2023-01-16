import { images } from './index';

export default function hideOldImage() {
  for (let i = 0; i < images.length; i++) {
    const indexOfOldImage = images.indexOf(images[i]);
    const oldImage = images[indexOfOldImage];
    const oldImageHTML = oldImage.name;
    oldImage.zIndexJS = 0;
    oldImageHTML.style.zIndex = '0';
    oldImageHTML.classList.add('disappear');
    oldImageHTML.classList.remove('appear');
    return indexOfOldImage;
  }
}
