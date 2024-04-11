let currentImageIndex = 0;
const images = document.querySelectorAll(".slider-image");
const imageCount = images.length;

// function openSlider(image) {
//   const overlay = document.createElement("div");
//   overlay.className = "overlay";

//   const prevButton = document.createElement("button");
//   prevButton.className = "prevButton";
//   prevButton.innerHTML = "◄";
//   prevButton.addEventListener("click", showPreviousImage);
//   overlay.appendChild(prevButton);

//   const currentImage = document.createElement("img");
//   currentImage.src = image.src;
//   overlay.appendChild(currentImage);

//   const nextButton = document.createElement("button");
//   nextButton.className = "nextButton";
//   nextButton.innerHTML = "►";
//   nextButton.addEventListener("click", showNextImage);
//   overlay.appendChild(nextButton);

//   document.body.appendChild(overlay);

//   document.addEventListener("keydown", handleKeyPress);
// }

// function showNextImage() {
//   currentImageIndex = (currentImageIndex + 1) % imageCount;
//   const currentImage = images[currentImageIndex];
//   document.querySelector(".overlay img").src = currentImage.src;
// }

// function showPreviousImage() {
//   currentImageIndex = (currentImageIndex - 1 + imageCount) % imageCount;
//   const currentImage = images[currentImageIndex];
//   document.querySelector(".overlay img").src = currentImage.src;
// }

// function handleKeyPress(e) {
//   if (e.key === "ArrowRight") {
//     showNextImage();
//   } else if (e.key === "ArrowLeft") {
//     showPreviousImage();
//   }
// }

// document.querySelectorAll(".slider-image").forEach((image) => {
//   image.addEventListener("click", () => openSlider(image));
// });

function closeSlider() {
  const overlay = document.querySelector(".overlay");
  document.body.removeChild(overlay);
}

function createCloseButton() {
  const closeButton = document.createElement("button");
  closeButton.className = "closeButton";
  closeButton.innerHTML = "X";
  closeButton.addEventListener("click", closeSlider);
  document.querySelector(".overlay").appendChild(closeButton);
}

function openSlider(image) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const prevButton = document.createElement("button");
  prevButton.className = "prevButton";
  prevButton.innerHTML = "◄";
  prevButton.addEventListener("click", showPreviousImage);
  overlay.appendChild(prevButton);

  const currentImage = document.createElement("img");
  currentImage.src = image.src;
  overlay.appendChild(currentImage);

  const nextButton = document.createElement("button");
  nextButton.className = "nextButton";
  nextButton.innerHTML = "►";
  nextButton.addEventListener("click", showNextImage);
  overlay.appendChild(nextButton);

  document.body.appendChild(overlay);

  document.addEventListener("keydown", handleKeyPress);

  createCloseButton();
}
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageCount;
  const currentImage = images[currentImageIndex];
  document.querySelector(".overlay img").src = currentImage.src;
}

function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + imageCount) % imageCount;
  const currentImage = images[currentImageIndex];
  document.querySelector(".overlay img").src = currentImage.src;
}

function handleKeyPress(e) {
  if (e.key === "ArrowRight") {
    showNextImage();
  } else if (e.key === "ArrowLeft") {
    showPreviousImage();
  }
}

document.querySelectorAll(".slider-image").forEach((image) => {
  image.addEventListener("click", () => openSlider(image));
});
