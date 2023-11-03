function drawRectangle() {
    const n = 3;
    let str = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
          str += "*";
        } else {
          str += " ";
        }
      }
      if (i !== n) {
        str += "\n";
      }
    }
    console.log(str);
  }
  drawRectangle()