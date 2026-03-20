let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((s) => s.classList.remove("active"));
  slides[index].classList.add("active");
}

// Right Arrow
document.querySelector(".right-arrow").onclick = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
};

// Left Arrow
document.querySelector(".left-arrow").onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

// Auto Slide
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);

