// Slideshow image paths
const images = [
  "assets/slide1.jpeg",
  "assets/slide2.jpeg",
  "assets/slide3.jpeg"  // Add more if needed
];

let index = 0;
const slide = document.getElementById("slide");

// Change image every 2 seconds
setInterval(() => {
  index = (index + 1) % images.length;
  slide.src = images[index];
}, 2000);
