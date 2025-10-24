console.log("Olá mundo")

const sprites = new Image();
sprites.src = 'css/sprites.png'; 

const canvas = document.querySelector('#game-canvas');
const contexto = canvas.getContext('2d');


const LoopBird = () => {
    contexto.drawImage(sprites, 0, 0, 33, 24, 10, 50, 33, 24);
    requestAnimationFrame(LoopBird)   
}

LoopBird();