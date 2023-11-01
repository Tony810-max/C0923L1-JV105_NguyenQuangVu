const mainTable = document.getElementById('mainTable')

let result = ""
for (let i =1; i <= 10; i++){
    result += "<tr>"
    for (let j =1; j <=10;j++){
        let nhan = i *j;
        result += "<td>" + i+ "x" + j+ "="+ nhan+ "</td>"
    }
    result +="</tr>"
}   
mainTable.innerHTML = result
