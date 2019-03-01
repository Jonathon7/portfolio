window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  var index = -1;
  var offset = 320;
  var positionX = canvas.width / 2 - offset;
  var allCharacters = setInterval(drawText, 120);
  var welcome = true;
  var to = false;
  var my = false;
  var portfolio = false;
  let O = 0;
  let T = 0;
  let E = 0;

  let outlineX = (canvas.width / 3) * 2;
  let outlineY = 300;
  let outlineDx = 0;
  let outlineDy = -4;

  let outline2x = (canvas.width / 3) * 2.3;
  let outline2y = 550;
  let outline2Dx = 4;
  let outline2Dy = 0;

  function drawText() {
    let text = "WELCOME TO MY PORTFOLIO";
    let wordArray = text.split(" ");

    index++;

    let welcomeArray = wordArray[0].split("");
    let toArray = wordArray[1].split("");
    let myArray = wordArray[2].split("");
    let portfolioArray = wordArray[3].split("");

    positionX += 32;

    //Welcome Text
    if (!welcomeArray[index] && portfolio === false) {
      welcome = false;
      to = true;
      index = 0;
    }

    if (welcome === true) {
      if (welcomeArray[index] === "L" || welcomeArray[index] === "O") {
        positionX -= 8;
      }

      if (welcomeArray[index] === "C") {
        positionX -= 10;
      }

      if (welcomeArray[index] === "M") {
        positionX -= 4;
      }

      if (welcomeArray[index] === "E") {
        E++;
        if (E === 1) {
          positionX += 2;
        }
        positionX -= 2;
      }

      ctx.font = "40px Source Sans Pro";
      ctx.fillText(welcomeArray[index], positionX, 200);
    }

    //To Text
    if (
      !toArray[index] &&
      welcome === false &&
      my === false &&
      to === true &&
      portfolio === false
    ) {
      to = false;
      my = true;
      index = 0;
    }

    if (to === true && my === false && portfolio === false) {
      if (toArray[index] === "O") {
        T++;
        if (T === 1) {
          positionX = positionX - 10;
        }
      }

      ctx.font = "40px Source Sans Pro";
      ctx.fillText(toArray[index], positionX, 300);
    }

    //My Text
    if (
      !myArray[index] &&
      welcome === false &&
      portfolio === false &&
      my === true
    ) {
      my = false;
      portfolio = true;
      index = 0;
    }

    if (my === true && portfolio === false) {
      ctx.font = "40px Source Sans Pro";
      ctx.fillText(myArray[index], positionX + 20, 300);
    }

    //Portfolio Text
    if (!portfolioArray[index]) {
      portfolio = false;
      clearInterval(allCharacters);

      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);

      setTimeout(() => {
        drawOutline();
      }, 1420);
    }

    if (portfolio === true) {
      ctx.font = "40px Source Sans Pro";
      if (portfolioArray[index] === "O") {
        O++;

        if (O === 3) {
          positionX = positionX - 20;
        }

        if (O === 1 || O === 2) {
          positionX -= 9;
        }
      }

      if (portfolioArray[index] === "R" || portfolioArray[index] === "L") {
        positionX -= 5;
      }

      if (portfolioArray[index] === "L") {
        positionX += 2;
      }

      if (portfolioArray[index] === "T" || portfolioArray[index] === "F") {
        positionX -= 7;
      }

      if (portfolioArray[index] === "I") {
        positionX -= 8;
      }

      ctx.fillText(portfolioArray[index], positionX, 400);
    }
  }

  function outline() {
    ctx.beginPath();
    ctx.rect(outlineX, outlineY, 5, 5);
    ctx.rect(outline2x, outline2y, 5, 5);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();
  }

  function drawOutline() {
    outline();

    outlineY += outlineDy;
    outlineX += outlineDx;

    outline2x += outline2Dx;
    outline2y += outline2Dy;

    if (outlineY + outlineDy < 200) {
      outlineDx = 4;
      outlineDy = 0;
    }

    if (outlineX + outlineDx > (canvas.width / 3) * 2.4) {
      outlineDx = 0;
    }

    if (outline2x + outline2Dx > (canvas.width / 3) * 2.6) {
      outline2Dx = 0;
      outline2Dy = -4;
    }

    if (outline2y + outline2Dy < 420) {
      outline2Dy = 0;
    }

    requestAnimationFrame(drawOutline);
  }
};
