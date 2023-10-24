const firstInput = document.getElementById('first')
const secondInput = document.getElementById('second')
const resultInput = document.getElementById('result')


const btnCong = document.getElementById('btnCong')
const btntru = document.getElementById('btntru')
const btnnhan = document.getElementById('btnnhan')
const btnchia = document.getElementById('btnchia')

const tinhTong = () => {
    let firstValue = parseFloat(firstInput.value)
    let secondValue = parseFloat(secondInput.value)
    result = firstValue + secondValue
    resultInput.value = result
}

const tinhHieu = () => {
    let firstValue = parseFloat(firstInput.value)
    let secondValue = parseFloat(secondInput.value)
    result = firstValue - secondValue
    resultInput.value = result
}

const tinhNhan = () => {
    let firstValue = parseFloat(firstInput.value)
    let secondValue = parseFloat(secondInput.value)
    result = firstValue * secondValue
    resultInput.value = result
}

const tinhchia = () => {
    let firstValue = parseFloat(firstInput.value)
    let secondValue = parseFloat(secondInput.value)
    result = firstValue / secondValue
    resultInput.value = result
}
btnCong.addEventListener('click',tinhTong)
btntru.addEventListener('click',tinhHieu)
btnnhan.addEventListener('click',tinhNhan)
btnchia.addEventListener('click',tinhchia)