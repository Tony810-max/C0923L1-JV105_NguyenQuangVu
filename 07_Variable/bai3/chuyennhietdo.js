
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

const changeBtn = document.getElementById('changeBtn')


const chuyendoi = () => {
    const cValue = parseFloat(celsiusInput.value)
    if(!isNaN(cValue)) {
        const result = 9/5 * cValue + 32
        fahrenheitInput.value = result;
    }

}

changeBtn.addEventListener('click', chuyendoi)