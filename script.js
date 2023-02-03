var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");
var stage = document.getElementById("stage");
let hue = 0;
let saturate = 100;
let brightness = 105;
let contrast = 105;

var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var img = new Image();

//Image with EventListener
img.addEventListener(
  "load",
  function () {
    ctx.filter = "none";
    ctx.drawImage(img, 0, 0, 556, 162);
    window.URL.revokeObjectURL(this.src);
  },
  false
);
img.src = "stage.png";
img.style.width = `${556}px`;
img.style.height = `${162}px`;
img.id = "stage";

slider.oninput = function () {
  output.innerHTML = this.value;
  hue = this.value;
  change();
};

slider2.oninput = function () {
  output2.innerHTML = this.value;
  saturate = this.value;
  change();
};

slider3.oninput = function () {
  output3.innerHTML = this.value;
  brightness = this.value;
  change();
};

slider4.oninput = function () {
  output4.innerHTML = this.value;
  contrast = this.value;
  change();
};

var download = document.getElementById("download");
let huecopy = hue;
let saturatecopy = saturate;
let brightnesscopy = brightness;
let contrastcopy = contrast;
download.addEventListener(
  "click",
  function () {
    ctx.filter = `hue-rotate(${hue}deg) saturate(${saturate}%) brightness(${brightness}%) contrast(${contrast}%)`;
    ctx.drawImage(img, 0, 0, 556, 162);
    download.href = canvas.toDataURL();
    download.download = "img.png";
    resetImage();
  },
  false
);

function change() {
  canvas.style.filter = `hue-rotate(${hue}deg) saturate(${saturate}%) brightness(${brightness}%) contrast(${contrast}%)`;
  stage.style.filter = `hue-rotate(${hue}deg) saturate(${saturate}%) brightness(${brightness}%) contrast(${contrast}%)`;
}

function resetImage() {
  img.src = "stage.png";
}
