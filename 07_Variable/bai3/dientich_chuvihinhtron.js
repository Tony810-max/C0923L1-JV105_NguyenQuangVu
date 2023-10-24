const bankinhInput = document.getElementById('bankinh')
const areaInput = document.getElementById("area")
const chuviInput = document.getElementById('chuvi')

const btnArea = document.getElementById("btnArea")
const btnChuvi = document.getElementById("btnChuvi")

const tinhdientich = () => {
    const bankinhValue = parseFloat(bankinhInput.value)
    const result = 3.14 * bankinhValue * bankinhValue;
    if (!isNaN(result)) {
        areaInput.value = result
    }
}

const tinhchuvi = () => {
    const bankinhValue = parseFloat(bankinhInput.value)
    const result = 3.14 * bankinhValue * 2;
    if (!isNaN(result)) {
        chuviInput.value = result
    }
}

btnArea.addEventListener('click', tinhdientich)
btnChuvi.addEventListener('click', tinhchuvi)