setTimeout(() => {
  var nav = document.querySelector(".nav-cont");
  nav.classList.toggle("navbar");
  animation();
}, 3000);

function animation() {
  let canvas = document.getElementById("myCanvas");
  canvas.style.left = "-100vw";

  let mainCont = document.querySelector(".main-cont");
  mainCont.style.right = 0;

  setTimeout(() => {
    canvas.style.left = 0;
  }, 500);
}
