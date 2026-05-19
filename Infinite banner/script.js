const track = document.getElementById("track");
let slides = document.querySelectorAll(".slide");

// clone slide đầu
const firstClone = slides[0].cloneNode(true);
track.appendChild(firstClone);

// update lại danh sách
slides = document.querySelectorAll(".slide");

let index = 0;
const slideWidth = 100;

function move() {
  index++;

  track.style.transition = "transform 0.6s ease";
  track.style.transform = `translateX(-${index * slideWidth}%)`;

  // nếu đang ở clone (slide cuối giả)
  if (index === slides.length - 1) {
    setTimeout(() => {
      track.style.transition = "none";
      index = 0;
      track.style.transform = `translateX(0)`;
    }, 600);
  }
}

setInterval(move, 3000);