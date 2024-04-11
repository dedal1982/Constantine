function openSlider(image) {
  var slider = document.getElementById("slider");
  var sliderContent = slider.querySelector(".slider-content");

  sliderContent.src = image.src;
  slider.style.display = "block";
}

document.getElementById("slider").onclick = function () {
  this.style.display = "none";
};
