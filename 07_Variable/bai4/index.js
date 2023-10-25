const moneyInput = document.getElementById('money')
const select1Input = document.getElementById('select1')
const select2Input = document.getElementById('select2')
const moneyChanged = document.getElementById('moneyChanged')

const btnChange = document.getElementById('btnChange')



const doiTienDola = () => {
    let moneyValue = parseInt(moneyInput.value)

    let result = moneyValue / 23000
    return result
}
const doiTienViet = () => {
    let moneyValue = parseInt(moneyInput.value)
    let result = moneyValue * 23000
    return result
}

const chuyendoi = () => {
    if (select1Input.value == 'VND' && select2Input.value == "USD") {

        let result = doiTienDola()
        moneyChanged.value = result
    }
    else if (select1Input.value == 'USD' && select2Input.value == "VND") {
        let result = doiTienViet()
        moneyChanged.value = result
    }
    else if (select1Input.value == 'VND' || select1Input.value == 'USD') {
        let moneyValue = parseInt(moneyInput.value)
        moneyChanged.value = moneyValue
    }
}

btnChange.addEventListener('click', chuyendoi)