console.log("Olá mundo");

const sprites = new Image();
sprites.src = "css/sprites.png";

const canvas = document.querySelector("#game-canvas");
const contexto = canvas.getContext("2d");

const FlappyBird = {
  spritesX: 0,
  spritesY: 0,
  alturaX: 33,
  alturaY: 24,
  X: 33,
  Y: 24,
  larguraX: 50,
  larguraY: 10,
};

const chao = {
  spritesX: 0,
  spritesY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
};

const planoDeFundo = {
  spritesX: 390,
  spritesY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
};

const fundo_desenho = () => {
    contexto.fillstyle = '#70c5ce';
    contexto.fillRect (0, 0, canvas.width, canvas.height);
    /*  contexto.fillStyle = "#70c5ce";
  contexto.fillRect(0, 0, canvas.width, canvas.height);*/ 

  contexto.drawImage(
    sprites,
    planoDeFundo.spritesX,
    planoDeFundo.spritesY,
    planoDeFundo.largura,
    planoDeFundo.altura,
    planoDeFundo.x,
    planoDeFundo.y,
    planoDeFundo.largura,
    planoDeFundo.altura
  );

  contexto.drawImage(
    sprites,
    planoDeFundo.spritesX,
    planoDeFundo.spritesY,
    planoDeFundo.altura,
    planoDeFundo.largura,
    planoDeFundo.x + planoDeFundo.largura,
    planoDeFundo.y,
    planoDeFundo.altura,
    planoDeFundo.largura
  );
};

const Bird_desenho = () => {
  contexto.drawImage(
    sprites,
    FlappyBird.spritesX,
    FlappyBird.sprites,
    FlappyBird.alturaX,
    FlappyBird.alturaY,
    FlappyBird.larguraY,
    FlappyBird.larguraX,
    FlappyBird.X,
    FlappyBird.Y
  );
};

const chao_desenho = () => {
  contexto.drawImage(
    sprites,
    chao.spritesX,
    chao.spritesY,
    chao.largura,
    chao.altura,
    chao.x,
    chao.y,
    chao.largura,
    chao.altura
  );

  contexto.drawImage(
    sprites,
    chao.spritesX,
    chao.spritesY,
    chao.largura,
    chao.altura,
    chao.x + chao.largura,
    chao.y,
    chao.largura,
    chao.altura
  );
};

const loop = () => {
  Bird_desenho();
  fundo_desenho();
  chao_desenho();

  requestAnimationFrame(loop);
};

loop();
