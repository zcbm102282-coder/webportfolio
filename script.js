// === 음악 버튼 ===
const musicButton = document.getElementById('musicButton');
const bgm = document.getElementById('bgm');
let isPlaying = false;

musicButton.addEventListener('click', () => {
  if (!isPlaying) {
    musicButton.src = 'images/bt2.png';
    bgm.play();
  } else {
    musicButton.src = 'images/bt1.png';
    bgm.pause();
    bgm.currentTime = 0;
  }
  isPlaying = !isPlaying;
});

// === 중앙 이미지 ===
const innerImage = document.getElementById('innerImage');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btnNone = document.getElementById('btnNone');

// btt1 → im1.jpg
btn1.addEventListener('click', () => {
  innerImage.style.display = 'block';
  innerImage.style.opacity = '0';
  setTimeout(() => {
    innerImage.src = 'images/im1.jpg';
    innerImage.style.opacity = '1';
  }, 100);
});

// btt2 → im2.jpg
btn2.addEventListener('click', () => {
  innerImage.style.display = 'block';
  innerImage.style.opacity = '0';
  setTimeout(() => {
    innerImage.src = 'images/im2.jpg';
    innerImage.style.opacity = '1';
  }, 100);
});

// btt (none) → 이미지 숨김
btnNone.addEventListener('click', () => {
  innerImage.style.opacity = '0';
  setTimeout(() => {
    innerImage.style.display = 'none';
  }, 400);
});
