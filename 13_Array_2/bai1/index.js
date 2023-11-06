// Bài 1: Viết một chương trình Javascript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau. 
// Ví dụ có mảng chuỗi như sau: myColor = ["Red", "Green", "White", "Black"];
// Sau khi thực thi chương trình sẽ trả về dạng như sau : 
// "Red,Green,White,Black"

let myColor = ["Red", "Green", "White", "Black"];
let i;
let sum = "";
for (i = 0; i < myColor.length; i++) {
    sum += myColor[i];
    if (i !== myColor.length - 1) {
        sum += ","
    }
}
document.write("bài 1: " + sum);

// Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2  số chẵn. 
// Ví dụ nếu bạn nhập vào 025468 thì kết quả của chương trình sẽ là 0-254-6-8.
var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
document.write("<br>")
document.write("<br>")
document.write(result.join(''));

// Bài 3: Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa. 
// Ví dụ: nếu bạn nhập vào chuỗi 'The Quick Brown Fox' kết quả của chương trình là 'tHE qUICK bROWN fOX'.

var str = 'c';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));
