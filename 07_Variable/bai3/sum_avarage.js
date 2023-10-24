const vatLyInput = document.getElementById('vatLy');
const hoaHocInput = document.getElementById('hoahoc');
const sinhHocInput = document.getElementById('sinhhoc');

const sumBtn = document.getElementById('sum')
const averageBtn = document.getElementById('average')

const sum = () => {
    const vlValue = parseFloat(vatLyInput.value);
    const hhValue = parseFloat(hoaHocInput.value);
    const shValue = parseFloat(sinhHocInput.value);

    if (!isNaN(vlValue) && !isNaN(hhValue) && !isNaN(shValue)) {
        const result = vlValue + hhValue + shValue
        return result
    }
}

const average = () => {
    const sumResult = sum();
    const result = sumResult / 3;
    alert("Diem trung binh la: " + result);

}

sumBtn.addEventListener('click', () => {
    alert("Diem tong la: " + sum())
})

averageBtn.addEventListener('click', average)
