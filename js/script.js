/*hamburger menu */
document.addEventListener("DOMContentLoaded", function() {
var categoryMenu = document.querySelector(".hamburger-menu");
var categoryList = document.querySelector(".menu__box");

categoryMenu.classList.remove("open");
categoryList.style.display = "none";

document.getElementById("menu__toggle").addEventListener("click", function() {
  toggleMenu();
});

function toggleMenu() {
  categoryMenu.classList.toggle("open");
  categoryList.style.display = (categoryMenu.classList.contains("open")) ? "block" : "none";
}

});

/*banner*/
/*banner*/
var banner = document.querySelector(".banner");
var images = [
  "asset/img/banner/image1.jpg",
  "asset/img/banner/image2.jpg",
  "asset/img/banner/image3.jpg"
];

var productLinks = [
  "product/headphone/ssa9.html",
  "product/mouse/gprox.html",
  "product/gpu/rtx4060.html"
];

var currentImage = 0;

function createImageLinkElement(src, link) {
  var a = document.createElement("a");
  a.href = link;
  var img = document.createElement("img");
  img.src = src;
  a.appendChild(img);
  return a;
}

// Preload all images
function preloadImages() {
  for (var i = 0; i < images.length; i++) {
    var img = new Image();
    img.src = images[i];
  }
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  var imageLink = createImageLinkElement(images[currentImage], productLinks[currentImage]);

  // Clear the banner and add the new image link
  banner.innerHTML = '';
  banner.appendChild(imageLink);
}

// Call the preloadImages function to preload images
preloadImages();

// Initial display of the first image link
banner.appendChild(createImageLinkElement(images[currentImage], productLinks[currentImage]));

setInterval(nextImage, 2000);
