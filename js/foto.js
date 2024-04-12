const images = document.querySelectorAll(".slider-image");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close");

let currentImageIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentImageIndex = index;
    modalImg.src = image.src;
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("keydown", (e) => {
  if (
    modal.style.display === "block" &&
    (e.key === "ArrowLeft" || e.key === "ArrowRight")
  ) {
    navigateImages(e.key);
  }
});

document.querySelector(".prevBtn").addEventListener("click", () => {
  navigateImages("ArrowLeft");
});

document.querySelector(".nextBtn").addEventListener("click", () => {
  navigateImages("ArrowRight");
});

function navigateImages(direction) {
  if (direction === "ArrowLeft") {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  } else {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  modalImg.src = images[currentImageIndex].src;
}
