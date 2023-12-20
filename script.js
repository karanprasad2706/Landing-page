var images = ['image.png', 'blog-29.png', 'image3.jpg'];
var currentIndex = 0;

function changeBackground() {
    document.querySelector('.hero').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + images[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 2000);



function toggleVisibility() {
    var firstHalf = document.getElementById("firstHalf");
    var secondHalf = document.getElementById("secondHalf");

    if (firstHalf.classList.contains("hidden")) {
      firstHalf.classList.remove("hidden");
      secondHalf.classList.add("hidden");
    } else {
      firstHalf.classList.add("hidden");
      secondHalf.classList.remove("hidden");
    }
  }
