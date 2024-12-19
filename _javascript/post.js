import { basic, initTopbar, initSidebar } from './modules/layouts';

import {
  loadImg,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  initToc,
  loadMermaid
} from './modules/components';

loadImg();
initToc();
imgPopup();
initSidebar();
initLocaleDatetime();
initClipboard();
initTopbar();
loadMermaid();
basic();

document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img[loading='lazy']");
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
});
