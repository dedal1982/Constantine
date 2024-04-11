function openSlider(image) {
  var slider = document.getElementById("slider");
  var sliderContent = slider.querySelector(".slider-content");

  sliderContent.src = image.src;
  slider.style.display = "flex";
}

// s
function closedSlider() {
  var slider = document.getElementById("slider");
  document.querySelector(".closed-img").onclick = function () {
    slider.style.display = "none";
  };
}
