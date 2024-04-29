// Slayder elementlari
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

// Hozirgi slayd indeksi
let currentSlide = 0;

// Slaydni yangilash funksiyasi
function updateSlide(index) {
  const width = images[0].clientWidth;
  slides.style.transform = `translateX(-${index * width}px)`;
}

// Tugmalarni boshqarish
document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  updateSlide(currentSlide);
});

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % images.length;
  updateSlide(currentSlide);
});

// Avtomatik slayd
setInterval(() => {
  currentSlide = (currentSlide + 1) % 4;
  updateSlide(currentSlide);
}, 3000); // 3 soniyada avtomatik o'tadi
