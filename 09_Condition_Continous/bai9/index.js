//bai1
const firstNumber = document.getElementById('firstNumber')
const secondNumber = document.getElementById('secondNumber')
const result = document.getElementById('result')

const btnCheck = document.getElementById('btnCheck')

const checkDiv = () => {
    firstValue = parseFloat(firstNumber.value)
    secondValue = parseFloat(secondNumber.value)

    if (firstValue % secondValue == 0) {
        result.value = firstValue + " chia hết cho " + secondValue
    } else {
        result.value = firstValue + " không Chia hết cho " + secondValue
    }
}

btnCheck.addEventListener('click', checkDiv)

//bai 2
const ageInput = document.getElementById('age')
const ageResult = document.getElementById('ageResult')

const btnAge = document.getElementById('btnAge')

const kiemtratuoi = () => {
    const ageValue = parseInt(ageInput.value)
    switch (ageValue) {
        case 15:
            ageResult.value = "Được phép nhập học vào lớp 10"
        default:
            ageResult.value = " Không đủ điều kiện vào lớp 10"
    }
}
btnAge.addEventListener('click', kiemtratuoi)