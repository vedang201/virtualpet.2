class Food{
  constructor(){
  this.foodStock = 0;
  this.milkImage = loadImage("Milk.png");
  this.lastFed;

  }

 getFoodStock(){
 return this.foodStock;
 }
 updateFoodStock(stock){
  this.foodStock= stock;
 }
 deductFood(){
  if(this.foodStock<= 0){
    this.foodStock=0;
  }
  else{
    this.foodStock-=1;
  }

 }
 getFedTime(fedTime){
   this.lastFed = fedTime;

 }
 display(){
   var x=80,y=100;

   imageMode(CENTER);
   image(this.milkImage,720,220,70,70);

   if(this.foodStock!=0){
     for(var i=0;i<this.foodStock;i++){
       if(i%10==0){
         x=80;
         y=y+50;
       }
      image(this.image,x,y,50,50);
      x=x+30;
     }
   }


}
}
 