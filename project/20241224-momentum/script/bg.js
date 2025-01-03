const img = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"
]
const randomImg = img[Math.floor(Math.random() * img.length)];
const bgImage = `url(./img/img${randomImg})`
document.querySelector("main").style.backgroundImage = bgImage