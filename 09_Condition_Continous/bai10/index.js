const doInput = document.getElementById('doC')
const resultF = document.getElementById('resultF')

const btnchange = document.getElementById('btnchange')

const exchange = () => {
  doValue = parseFloat(doInput.value)
  let result = doValue * 9 / 5 + 32
  resultF.value = result
}

btnchange.addEventListener('click', exchange)

//bai2
const meterInput = document.getElementById('meter')
const resultFeet = document.getElementById('resultFeet')

const btnFeet = document.getElementById('btnFeet')

const chuyendoi = () => {
  let meterValue = parseFloat(meterInput.value)

  let result = meterValue * 3.2808
  resultFeet.value = result
}

btnFeet.addEventListener('click', chuyendoi)

//bai3
const edgeInput = document.getElementById('edge')
const resultEdge = document.getElementById('resultEdge')

const btnEdge = document.getElementById('btnEdge')

const tinhdientich = () => {
  edgeValue = parseInt(edgeInput.value)
  let result = edgeValue * edgeValue;
  resultEdge.value = result

}

btnEdge.addEventListener('click', tinhdientich)

//bai4
const lengthInput = document.getElementById('lengRec')
const widthInput = document.getElementById('widthRec')
const resultArea = document.getElementById('resultArea')

const btnArea = document.getElementById('btnArea')

const areaRec = () => {
  let lengtValue = parseInt(lengthInput.value)
  let widthValue = parseInt(widthInput.value)

  let result = lengtValue * widthValue
  resultArea.value = result
}

btnArea.addEventListener('click', areaRec)

//bai5
const lengthFirst = document.getElementById('lengFirst')
const lengthSecond = document.getElementById('lengthSecond')
const resultTri = document.getElementById('resultTri')

const btnTri = document.getElementById('btnTri')

const tamgiacvuong = () => {
  let firstValue = parseInt(lengthFirst.value)
  let secondValue = parseInt(lengthSecond.value)

  let result = 1 / 2 * firstValue * secondValue;

  resultTri.value = result
}

btnTri.addEventListener('click', tamgiacvuong)

//bai6
const factorA = document.getElementById('factorA')
const factorB = document.getElementById('factorB')
const equaReult = document.getElementById('equaReult')

const btnEqua = document.getElementById('btnEqua')

const phuontrinhbacnhat = () => {
  let factorAValue = parseFloat(factorA.value)
  let factorBValue = parseFloat(factorB.value)

  if (factorAValue != 0) {
    equaReult.value = -factorBValue / factorAValue;
  }
  else {
    if (factorBValue != 0) {
      equaReult.value = "Phương trình vô nghiệm"
    } else {
      equaReult.value = "Phương trình vô số nghiệm"
    }
  }
}

btnEqua.addEventListener('click', phuontrinhbacnhat)

//bai 7
const factA = document.getElementById('factA')
const factB = document.getElementById('factB')
const factC = document.getElementById('factC')
const equaReult1 = document.getElementById('equaReult1')
const equaReult2 = document.getElementById('equaReult2')

const btnEqua2 = document.getElementById('btnEqua2')

const phuongtrinhbac2 = () => {
  let factAValue = parseFloat(factA.value)
  let factBValue = parseFloat(factB.value)
  let factCValue = parseFloat(factC.value)

  let delta = factBValue * factBValue - 4 * factAValue * factCValue;

  if (delta >= 0) {
    let sqrtDelta = Math.sqrt(delta)
    let x1 = (-factBValue + sqrtDelta) / (2 * factAValue)
    let x2 = (-factBValue - sqrtDelta) / (2 * factAValue)
    equaReult1.value = x1
    equaReult2.value = x2
  } else {
    equaReult1.value = equaReult2.value = "Phương trình vô nghiệm"
  }
}

btnEqua2.addEventListener('click', phuongtrinhbac2)

//bai 8
const ageIput = document.getElementById('age')
const ageResult = document.getElementById('ageResult')

const btnAge = document.getElementById('btnAge')

const ageCheck = () => {
  let ageValue = parseInt(ageIput.value)
  if (ageValue <120 && ageValue >0){
    ageResult.value = "Đây là tuổi người"
  } else {
    ageResult.value = "Đây không phải là tuổi người"
  }
}

btnAge.addEventListener('click',ageCheck)

//bai 9
const firstNumber = document.getElementById('firstNumber')
const secondNumber = document.getElementById('secondNumber')
const thirdNumber = document.getElementById('thirdNumber')
const triResult = document.getElementById('triResult')

const btnCheck =document.getElementById('btnCheck')

const kiemtratamgiac = () => {
  let a = parseFloat(firstNumber.value)
  let b = parseFloat(secondNumber.value)
  let c = parseFloat(thirdNumber.value)

  if (a >0 && b >0 && c>0){
    if (a+b>c && a+c>b && b+c>a){
      triResult.value ="Ba số đã nhập là 3 cạnh của 1 tam giác"
    }
  } else {
    triResult.value ="Ba số đã nhập không là 3 cạnh của 1 tam giác"
  }
}

btnCheck.addEventListener('click',kiemtratamgiac)

//bai10

const power = document.getElementById('power')
const timed = document.getElementById('timed')
const elecResult = document.getElementById('elecResult')

const btnElectric = document.getElementById('btnElectric')

const tiendien =() => {
  let powerValue = parseFloat(power.value)
  let timedValue = parseFloat(timed.value)

  let result = (powerValue/1000)*timedValue*2014
  elecResult.value = result
}

btnElectric.addEventListener('click',tiendien)

//bai11

const total = document.getElementById('total')
const totalResult = document.getElementById('totalResult')

const btnTotal = document.getElementById('btnTotal')

const tinhthue = () => {
  let 
}

btnTotal.addEventListener('click',tinhthue)