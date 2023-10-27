const selectValue = document.getElementById('selectMonth')
const result = document.getElementById('result')

const btnCalc = document.getElementById('btnCalc')

const calcMonth = () => {
    switch (selectValue.value) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            result.value = "Tháng " + selectValue.value + " có 30 ngày"
            break;
        case "2":
            result.value = "Tháng " + selectValue.value + " có 28 ngày hoặc 29 ngày"
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            result.value = "Tháng " + selectValue.value + " có 31 ngày"
            break;

    }

}

btnCalc.addEventListener('click', calcMonth)