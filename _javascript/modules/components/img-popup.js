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
    width: '90vw', // 뷰포트 너비의 90%
    height: 'auto', // 높이는 원본 비율에 맞춰 자동 조정
    autoplayVideos: true, // 비디오 자동 재생 (선택 사항)
    onOpen: () => {
      document.body.style.overflow = 'hidden'; // 팝업 열릴 때 스크롤 비활성화
    },
    onClose: () => {
      document.body.style.overflow = ''; // 팝업 닫힐 때 스크롤 활성화
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
