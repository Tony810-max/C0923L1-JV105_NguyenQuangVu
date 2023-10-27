let imgBall = document.getElementById('imgBall')

const btnMove = document.getElementById('btnMove')

imgBall.style.position = 'relative'
imgBall.style.left = "0px"; 

const dichchuyen = () => {
    imgBall.style.left = parseInt(imgBall.style.left) + 10 + 'px';
}

btnMove.addEventListener('click',dichchuyen)
