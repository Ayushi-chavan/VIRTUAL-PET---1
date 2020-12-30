//Create variables here
var dog,dogImg
var happyDog
var database
var foods
var foodStock
 
function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(400,250)
  dog.scale = 0.3
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happyDog);
  
  foodStock = database.ref('food')
  foodStock.on("value",readStock)

  }


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
     dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

fill(245, 245, 220);
  textSize(20);
  text("Food Stock : " + foods, 30, 40);
}

function readStock(data){
  foods=data.val()
  }
  
  function writeStock(x){
    if(x<=0){
      x=0;
      }
      else{
      x=x-1
      }
  database.ref('/').update({
  food:x
  })
  }

