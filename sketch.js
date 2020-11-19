//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage,happyDogImage;
database = firebase.database();
var foodObj;
var fedTime;
var feed,addFood;
function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
  happyDogImage = loadImage("happydog.png");
}

function setup() {
	createCanvas(1600, 1000);
  database = firebase.database();
  dog = createSprite(200,200,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.2;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  foodObj = new Food();

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  
  
}


function draw() {  
  background("white");

  drawSprites();
  //add styles here

  foodObj.display();
  if (keyWentDown(UP_ARROW)){

    writeStock(foodS)
    dog.addImage(happyDogImage);
  }

 fedTime = database.ref('FeedTime');
 fedTime.on("value",function(data){
   lastFed=data.val();
 })

 fill(255,255,254);
 textSize(15);
 if(lastFed>=12){
   text("Last Feed:"+ lastFed%12+"PM",350,30);
 }
 else if(lastFed==0){
   text("Last Feed:12 AM",350,30);
 }
 else{
   text("Last Feed:"+lastFed+"AM",350,30);
 }

}
function readStock(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food : foodObj.getFoodStock(),
    FeedTime:hour()
  })
  
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })

}