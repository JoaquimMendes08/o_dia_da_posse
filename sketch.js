var lulaImg
var bolsonaroImg;
var bolsonaro2Img;
var backgroundImg;

var PLAY = 1
var gameState = PLAY
function preload(){
 
    lulaImg = loadImage("lula.png");
    bolsonaroImg = loadImage("bolsonaro.png");
    bolsonaro2Img = loadImage("bolsonaro2.png");
    backgroundImg = loadImage("bandeira.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    bolsonaro = createSprite(width / 5, height - 300, 20, 20);
    bolsonaro.addImage("sério", bolsonaro2Img);
    bolsonaro.addImage("rindo", bolsonaroImg); 
    bolsonaro.scale = 0.5;
    bolsonaro.depth = 1;

    lula = createSprite(width / 2, height - 300, 50, 50);
    lula.addImage(lulaImg);
    lula.scale = 0.5;
    lula.depth = 5;

   
}

function draw() {
    
    background(backgroundImg);


    if (gameState === PLAY){


        lula.x = World.mouseX

        if(bolsonaro.collide(lula)){
            bolsonaro.position.x += 560;
            bolsonaro.changeImage("rindo");
            if(bolsonaro.position.x > 1000){
                bolsonaro.position.x = 500
            }
        }

        if(bolsonaro.position.x == 500){
            bolsonaro.changeImage("sério");
        }
        

        bolsonaro.setCollider("rectangle", 0, 0, 200, 600);
        //bolsonaro.debug = true

        lula.setCollider("rectangle", 0, 0, 600, 350);
        //lula.debug = true
    }    

    drawSprites();
}