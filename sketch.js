var ator,carro1,carro2,carro3,estrada,carro4,
carro5,carro6;

var imagemcarro1,imagemcarro2,imagemcarro3,
imagemcarro4,imagemcarro5,imagemcarro6,estrada, imagemator;

var vidas, pontos;

function preload(){
  imagemator = loadImage('imagens/ator-1.png')
  
imagemcarro1 = loadImage('imagens/carro-1.png')
imagemcarro2 = loadImage('imagens/carro-2.png') 
imagemcarro3 = loadImage('imagens/carro-3.png')
imagemcarro4 = loadImage('imagens/carro-1.png')
imagemcarro5 = loadImage('imagens/carro-2.png')
imagemcarro6 = loadImage('imagens/carro-3.png')
imagemestrada = loadImage('imagens/estrada.png')
imagemator = loadImage('imagens/ator-1.png')
}

function setup(){
  createCanvas(600,350)
carro1 = createSprite(600,150,20,20)
carro1.addImage(imagemcarro1)
carro1.scale = 0.5
carro2 = createSprite(600,250,20,20)
carro2.addImage(imagemcarro2)
carro2.scale = 0.5
carro3 = createSprite(600,300,20,20)
carro3.addImage(imagemcarro3)
carro3.scale = 0.5
carro4 = createSprite(600,100,20,20)
carro4.addImage(imagemcarro4)
carro4.scale = 0.5
carro5 = createSprite(600,50,20,20)
carro5.addImage(imagemcarro5)
carro5.scale = 0.5
carro6 = createSprite(600,205,20,20)
carro6.addImage(imagemcarro6)
carro6.scale = 0.5
ator = createSprite(200,335,20,20)
ator.addImage(imagemator)
ator.scale = 0.2
  
  
 vidas = 50
 pontos = 0
  
  
}

function draw(){
  
  background(imagemestrada)
  
  
  fill('#EA190A')
  text('vidas: ' + vidas, 90, 20)
  fill('#03A9F4')
  text('pontos: ' + pontos, 400, 20)  
  

  carro1.velocityX = -30
  carro2.velocityX = -15
  carro3.velocityX = -20
  carro4.velocityX = -20
  carro5.velocityX = -15
  carro6.velocityX = -10
  
  if(carro1.x < 0){
    carro1.x = 600
  }
  if(carro2.x < 0){
    carro2.x = 600
  }
  if(carro3.x < 0){
    carro3.x = 600
  }
  if(carro4.x < 0){
    carro4.x = 600
  }
  if(carro5.x < 0){
    carro5.x = 600
  }
  if(carro6.x < 0){
    carro6.x = 600
  }
  if (keyDown('up')) {
    ator.y = ator.y - 8
  }
   if (keyDown('down')) {
    ator.y = ator.y + 8
  } 
 if (
ator.isTouching(carro1) ||
ator.isTouching(carro2) ||
ator.isTouching(carro3) ||
ator.isTouching(carro4) ||
ator.isTouching(carro5) ||
ator.isTouching(carro6) 
) {
  ator.x = 200
  ator.y = 335
  vidas -= 1
 }
    if(ator.y < 0) {
    ator.y = 335
      
      pontos +=1
  }
  
      if(ator.y > 335) {
    ator.y = 335
  }
  
  if(vidas <1){
  carro1.remove()
  carro2.remove()
  carro3.remove()
  carro4.remove()
  carro5.remove()
  carro6.remove()
  ator.remove()
  textSize (25)
  text('Game Over', 200, 200)
  }
  
  
  
  drawSprites()
}