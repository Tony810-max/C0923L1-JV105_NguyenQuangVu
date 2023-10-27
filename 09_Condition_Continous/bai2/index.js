

let imgMove = document.getElementById('imgMove')
// imgMove.style.left = '0px'
// imgMove.style.position = 'relative'


const LeftMove = () => {
    imgMove.style.left = parseInt(imgMove.style.left) - 5 + 'px'

}

const rightMove = () => {
    imgMove.style.left = parseInt(imgMove.style.left) + 5 + 'px'

}

const upMove = () => {
    imgMove.style.top = parseInt(imgMove.style.top) - 5 + 'px'
}

const downMove = () => {
    imgMove.style.top = parseInt(imgMove.style.top) +5 + 'px'
}

const keyValue = (event)=> {

    switch(event.key){

        case "ArrowUp":
            upMove();
            break;
        case "ArrowDown":
            downMove();
            break;
        case "ArrowLeft":
            LeftMove();
            break;
        case "ArrowRight":
            rightMove()
            break;
        default:
            alert('Bạn đã nhập sai phím')
    }
    
}

document.addEventListener('keydown', keyValue)

