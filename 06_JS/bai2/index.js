var x  

// Kiểm tra lại khai báo
function inputName(){
    
    x = prompt(" Nhập tên của bạn ở đây")
}
function insertContent(){

    document.getElementById("content").innerHTML=  "ten của bạn là: " + "<b>" + x + "</b>" 
}