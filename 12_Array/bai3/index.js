const arrInput = document.getElementById('arrInput')
const result = document.getElementById('result')

const btnCheck = document.getElementById('btnCheck')
let numbers = [-3, 5, 1, 3, 2, 10];

// let numberString = numbers.toString()
// console.log(numberString);

const kiemTraMang = () => {
    for (let i=0; i <numbers.length; i++){
        // console.log(item);
        if(arrInput.value != ""){
            if(parseInt(arrInput.value) == numbers[i]) {
                result.value = "Có"
                break;
            } else {
                result.value = "xin lỗi hiện tại không có"
            }
        } else {
            result.value = "Vui lòng nhập nội dung kiểm tra vào"
        }
    }
}

btnCheck.addEventListener('click', kiemTraMang)
