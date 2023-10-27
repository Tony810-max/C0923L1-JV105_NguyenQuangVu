const box = document.getElementById('box')

const btnYes = document.getElementById('btnYes')
const btnNo = document.getElementById('btnNo')

btnNo.style.position = "relative"
btnNo.style.top = "0px"
btnNo.style.left = "0px"
const change = () => {
    btnNo.style.top =  Math.round(Math.random()*window.innerWidth) + "px";
    btnNo.style.left =  Math.round(Math.random()*window.innerHeight) + "px";
}

const dongY = () => {
    
}
btnNo.addEventListener('mouseover', change)
btnYes.addEventListener('click',dongY)