
const img = document.getElementById("carousel");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

let pictures = ["certificate0", "certificate1"];

img.src = `image/${pictures[0]}.jpg`;
let position = 0;

document.addEventListener("DOMContentLoaded", function () {

  const moveRight = () => {
    if (position >= pictures.length - 1) {
      position = 0;
      img.src = `image/${pictures[position]}.jpg`;
      return;
    }
    img.src = `image/${pictures[position + 1]}.jpg`;
    position++;
  };

  const moveLeft = () => {
    if (position < 1) {
      position = pictures.length - 1;
      img.src = `image/${pictures[position]}.jpg`;
      return;
    }
    img.src = `image/${pictures[position - 1]}.jpg`;
    position--;
  };

  rightBtn.addEventListener("click", moveRight);
  leftBtn.addEventListener("click", moveLeft);
});
