
var dog,happyDog,database,foodS,foodStock

function preload()
{
  this.image = loadImage("sprites/dogImg.png");
  this.image = loadImage("sprites/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);

}


function draw() {  
  background();
 backgroundColor(46,139,87);
 fill(255,255,254);
 textSize(15);

 if(lastFed>=12){
   text("Last Feed : " + lastFed%12 + "PM", 350,30);
 }else if(lastfed==0){
   text("Last Fed : 12AM",350,30);
 }else{
   text("Last Feed : " + lastFed + "PM", 350,30);
 }

  drawSprites();
  
  textSize(20)
  fill()
  stroke()
  text("Note: Press UP_ARROW Key To Feed Drago Milk",120,100);

}

function readStock(data){
  foodS = data.val();
}


function writeStock(x){

if(x<=0){
   x=0
}else{
  x=x-1;
}

  database.ref('/').update({
    Food:x
  })
}
 function feedDog(){
   dog.addImage(happyDog);

   foodObj.updateFoodStock(foodObj.getFoodStock()-1);
   database.ref('/').update({
     Food: foodobj.getFoodStock(),
    FeedTime: hour()
   })
 }

 function addFood(){
   foodStock++;
   database.ref('/').update({
    Food: foodS
   })
  }

