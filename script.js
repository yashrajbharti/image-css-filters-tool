var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");
let hue = 0;
let saturate = 100;
let brightness = 105;
let contrast = 105;

slider.oninput = function () {
  output.innerHTML = this.value;
  hue = this.value;
  document.getElementById(
    "stage"
  ).style.filter = `hue-rotate(${hue}deg) saturate(${saturate}%) brightness(${brightness}%) contrast(${contrast}%)`;
};

slider2.oninput = function () {
  output2.innerHTML = this.value;
  saturate = this.value;
  document.getElementById(
    "stage"
  ).style.filter = `hue-rotate(${hue}deg) saturate(${saturate}%) brightness(${brightness}%) contrast(${contrast}%)`;
};

slider3.oninput = function () {
  output3.innerHTML = this.value;
  brightness = this.value;
  document.getElementById(
    "stage"
  ).style.filter = `hue-rotate(${hue}deg) saturate(${saturate}%) brightness(${brightness}%) contrast(${contrast}%)`;
};

slider4.oninput = function () {
  output4.innerHTML = this.value;
  contrast = this.value;
  document.getElementById(
    "stage"
  ).style.filter = `hue-rotate(${hue}deg) saturate(${saturate}%) brightness(${brightness}%) contrast(${contrast}%)`;
};
