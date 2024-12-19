/**
 * Set up image popup
 *
 * Dependencies: https://github.com/biati-digital/glightbox
 */

const lightImages = '.popup:not(.dark)';
const darkImages = '.popup:not(.light)';
let selector = lightImages;

GLightbox({
  selector: '.popup', // 이미지 선택자
  width: '90vw', // 화면의 90% 너비
  height: '90vh', // 화면의 90% 높이
  zoomable: true, // 줌 가능
  draggable: true, // 드래그 가능
  onOpen: () => {
    const images = document.querySelectorAll('.gslide-image img');
    images.forEach(img => {
      img.style.maxWidth = '90vw';
      img.style.maxHeight = '90vh';
      img.style.objectFit = 'contain'; // 비율 유지
    });
  },
});

function updateImages(current, reverse) {
  if (selector === lightImages) {
    selector = darkImages;
  } else {
    selector = lightImages;
  }

  if (reverse === null) {
    reverse = GLightbox({ selector: `${selector}` });
  }

  [current, reverse] = [reverse, current];
}

export function imgPopup() {
  if (document.querySelector('.popup') === null) {
    return;
  }



  const hasDualImages = !(
    document.querySelector('.popup.light') === null &&
    document.querySelector('.popup.dark') === null
  );

  if (Theme.visualState === Theme.DARK) {
    selector = darkImages;
  }

  let current = GLightbox({ selector: `${selector}` });

  

  if (hasDualImages && Theme.switchable) {
    let reverse = null;

    window.addEventListener('message', (event) => {
      if (event.source === window && event.data && event.data.id === Theme.ID) {
        updateImages(current, reverse);
      }
    });
  }
}

