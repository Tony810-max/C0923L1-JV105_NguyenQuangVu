let mainTable = document.getElementById('mainTable')
let btnEdit = document.getElementById('btnEdit');
let idValue = document.getElementById('idValue')

let btnAdd = document.getElementById('btnAdd')
let btnHide = document.getElementById('btnHide')

let arr = []
let product, subTable, idEdit, count;



const handleAdd = () => {
    let product = document.getElementById('product').value;
    if (product != "") {
        arr.push(product)
    } else {
        alert("Vui lòng nhập sản phẩm vào..!!!")
    }
    handleDisplay();
}
const handleDisplay = () => {
    count = 1;
    subTable = ""
    arr.forEach((itemp) => {
        subTable += `<tr>
            <td>${count}</td>
                        <td >${itemp}</td>
                                <td>
                                    <button type="button" onclick="handleEdit(${count})" id="edit">Edit</button>
                                </td>
                                <td>
                                    <button type="button" id="delete" onclick="handleDelete(${count})">Delete</button>
                                </td>
                                </tr>
                `
        count += 1;
    })
    mainTable.innerHTML = subTable;
}

const handleEdit = (id) => {
    let subForm = document.getElementById('subForm');

    idEdit = id;
    idValue.value = idEdit
    console.log(idEdit);
    subForm.style.display = "block"
}

const changeContent = () => {
    let editValue = document.getElementById('editValue').value;
    arr[idEdit - 1] = editValue
    result = arr[idEdit - 1]
    alert("Cập nhập sản phẩm thành công...!!!")
    subForm.style.display = "none"
    handleDisplay()
}

const handleDelete = (id) => {
    arr.splice(id - 1, 1)
    handleDisplay()
}

btnHide.addEventListener('click', () => {
    subForm.style.display = "none"
})

btnEdit.addEventListener('click', changeContent)
btnAdd.addEventListener('click', handleAdd)