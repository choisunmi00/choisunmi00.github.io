/**
 * Set up image popup
 *
 * Dependencies: https://github.com/biati-digital/glightbox
 */

const lightImages = '.popup:not(.dark)';
const darkImages = '.popup:not(.light)';
let selector = lightImages;

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

  // let current = GLightbox({ selector: `${selector}` });
  let current = GLightbox({
    selector: '.popup',
    touchNavigation: true,
    loop: true,
    zoomable: true,
    width: '90vw',
    height: '90vh',
    onOpen: () => {
      document.body.style.overflow = 'hidden';
    },
    onClose: () => {
      document.body.style.overflow = '';
    },
  });
  
  
  
  if (hasDualImages && Theme.switchable) {
    let reverse = null;

    window.addEventListener('message', (event) => {
      if (event.source === window && event.data && event.data.id === Theme.ID) {
        updateImages(current, reverse);
      }
    });
  }
}
