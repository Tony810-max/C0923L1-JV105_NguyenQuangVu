const moneyInput = document.getElementById('money')
const select1Input = document.getElementById('select1')
const select2Input = document.getElementById('select2')
const moneyChanged = document.getElementById('moneyChanged')

const btnChange = document.getElementById('btnChange')



const doiTienViet = () => {
    let moneyValue = parseInt(moneyInput.value)

    let result = moneyValue / 23000
    return result
}
const doiTienDola = () => {
    let moneyValue = parseInt(moneyInput.value)
    let result = moneyValue * 23000
    return result
}

const chuyendoi = () => {
    if (select1Input.options[0].text == 'Việt Nam' && select2Input.options[1].text == "USD") {
        
        let result = doiTienDola()
        moneyChanged.value = result 
    }
    else if (select1Input.options[1].text =="Mỹ" && select2Input.options[0].text == "VND") {
        let result = doiTienViet()
        moneyChanged.value = result
    } else if (select1Input.options[0].text == "Việt Nam" || select1Input.options[1].text == "Mỹ"){
        moneyChanged.value = moneyInput.value
    }
}

btnChange.addEventListener('click', chuyendoi)