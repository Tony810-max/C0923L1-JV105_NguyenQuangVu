const btnPlay = document.getElementById('btnPlay')
function doanSo() {
    let inputMax = parseFloat(prompt("Nhập giá trị lớn nhất bạn cần đoán trong khoảng nào: "))
    // let inputMax = 10;
    let numberInput
    let number = Math.floor(Math.random() * inputMax)
    let count = 0;
    for (i = 1; i <= 3; i++) {
        numberInput = parseFloat(prompt("Nhập giá trị bạn chọn: "))
        if (numberInput === number) {
            alert("Chúc mừng bạn bạn đã trả lời đúng")
            break;
        } else {
            alert("số bạn nhập không chính xác..!! Vui lòng chọn lại..!!")
            count += 1;
        }
    }
    if (count === 3) {
        alert("Số bạn nhập không chính xác, bạn đã vượt quá số lần chọn vui lòng chơi lại...!!!")
    }
}

btnPlay.addEventListener('click',doanSo)
