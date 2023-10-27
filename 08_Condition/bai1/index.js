const yearInput = document.getElementById('year')
const result = document.getElementById('result')

const btnCheck = document.getElementById('btnCheck')


const yearCheck = () => {
    let yearValue = parseInt(yearInput.value)
    if ( yearValue % 4 == 0 && yearValue % 100 != 0 || yearValue % 400 == 0) {
        result.value = "Đây là năm nhuận"
    } else {
       result.value = "Đây không phải là năm nhuận"
    }
}

btnCheck.addEventListener('click', yearCheck)
