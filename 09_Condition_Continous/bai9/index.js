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
            ageResult.value = 'Được phép nhập học vào lớp 10'
            break
        default:
            ageResult.value = 'Quá tuổi nhập học vào lớp 10'

    }
    
}
btnAge.addEventListener('click', kiemtratuoi)


//bai 3
const NumberInput = document.getElementById('NumberFloat')
const numberResult = document.getElementById('numberResult')

const btnFloat =document.getElementById('btnFloat')

const kiemtraso = () => {
    const NumberValue = parseFloat(NumberInput.value)
    if (NumberValue >= 0 ){
        numberResult.value = "Số này là số dương"
    }else{
        numberResult.value = "Số này là số âm"
    }
}
btnFloat.addEventListener('click', kiemtraso)

//bai4
const firstInput = document.getElementById('numberFirst')
const secondInput = document.getElementById('numberSecond')
const thirdInput = document.getElementById('numberthird')
const resultMax = document.getElementById('resultMax')

const btnMax = document.getElementById('btnMax')

const solonnhat = () => {
    const firstValue = parseFloat(firstInput.value)
    const secondValue = parseFloat(secondInput.value)
    const thirdValue = parseFloat(thirdInput.value)

    if (firstValue >secondValue && firstValue >thirdValue) {
        resultMax.value = firstValue
    } else if (secondValue > thirdValue){
        resultMax.value = secondValue
    } else {
        resultMax.value = thirdValue
    }
}

btnMax.addEventListener('click', solonnhat)

//bai 5

const middleInput = document.getElementById('middleTest')
const endInput = document.getElementById('endTest')
const testResult = document.getElementById('testResult')

const btnTest = document.getElementById('btnTest')

const kiemtrahocluc = ()=> {
    const middleValue = parseFloat(middleInput.value)
    const endValue = parseFloat(endInput.value)
   const  result = (middleValue + endValue)/2
    if (result > 5){
        testResult.value = "Chúc mừng bạn đã qua kì thi"
        
    } else {
        testResult.value = "Xin chia buồn bạn"
    }
}
btnTest.addEventListener('click', kiemtrahocluc)

//bai 6
const priceInput = document.getElementById('price')
const percentInput = document.getElementById('percent')
const moneyResult = document.getElementById('moneyResult')

const btnMoney = document.getElementById('btnMoney')

const tinhtoan = () => {
    let priceValue = parseInt(priceInput.value)
    let percentValue = parseFloat(percentInput.value)

    let result = priceValue * (percentValue/100)

    moneyResult.value = result
}

btnMoney.addEventListener('click',tinhtoan)

//bai 7
const minuteInput = document.getElementById('minute')
const postageInput = document.getElementById('postageResult')
const feeDefault = 25000
const btnPostage = document.getElementById('btnPostage')

const checkPostage = () => {
    let minuteValue = parseInt(minuteInput.value)
   
    if(minuteValue < 50 ){
        let fee = 600
        resultPostage = fee + feeDefault
    }
     else if(50 < minuteValue < 200){
        let fee = 400 
        resultPostage = fee + feeDefault
    } else if (minuteValue >200 )
    {
        let fee = 200 
        resultPostage = fee + feeDefault
    }
    postageInput.value = resultPostage
}
btnPostage.addEventListener('click',checkPostage)
