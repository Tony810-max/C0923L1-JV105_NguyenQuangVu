let count = 0;
let countSNT = 0;
let soLuong = prompt('Nhap so luong vao: ')
for (let i = 2; i <1000; i++){
    let j;
    for (j =2; j <= i; j++){
        if (i % j === 0){
            break;
        }
    }
    if (i === j) {
        count += 1;
        if (count<= soLuong){
            document.write(j+"<br>")
        }
            console.log(count);
            // console.log(i);
        }
    
}