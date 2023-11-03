function drawTriangle() {
    // const n = 3;
    let str = "";
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3 - i; j++) {
        str += " ";
      }
      for (let k = 1; k <= i; k++) {
        str += "*";
      }
      if (i !== 3) {
        str += "\n";
      }
    }
    console.log(str);
  }

  drawTriangle()