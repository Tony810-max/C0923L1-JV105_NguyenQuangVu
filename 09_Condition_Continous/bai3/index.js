const weightInput = document.getElementById('weight')
const heightInput = document.getAnimations('height')
const result = document.getElementById('result')

const btnCheck = document.getElementById('btnCheck')

const kiemtrachiso = () => {
    let weightValue = parseFloat(weightInput.value)
    let heightValue = parseFloat(heightInput.value)

    let bmi = weightValue / (heightValue^2)

    if(bmi >= 30){
        result.value = "Obse"
    }else if (25 <= bmi <=30){
        result.value = "Overweight"
    } else if (18.5 <= bmi <= 25){
        result.value = "Normal"
    } else  {
        result.value = "Underweight"
    } 
}



btnCheck.addEventListener('click',kiemtrachiso)