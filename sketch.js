function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var num=5;
  var name="hello";
  var xyz=true;
  var obj= null;
  var object;
  console.log(object);
  console.log(name.length);
  console.log(name.toUpperCase);
  var num1="433333333";
  num1=parseInt(num1);
  console.log(13%5);
  num1=num1+1;
  console.log(num1);
  console.log("a" / "b");
  var c=10;
  if(c===10){
console.log("hihellohowdoudoiamokkhowr5wgfauygsfgfuygfuyfgsiufghasiuyfghasuyyguygfugfsuygfhjydfsgjhaguyagasu");

  }
  var name = "my naaaaaaaan";

  switch(name) {  
  case  "My name":  
  console.log("Condition 1");  
  break;  
  case  "my Name":  
  console.log("Condition 2");  
  break;  
  default:  
  console.log("None of the conditions are true");
  }
  for(var i=0; i<=5;  i++){
    console.log(i)
  }
  var i =0
while (i<=5){
	console.log(i)
	i=i+1
}
var friends = ["friend1","friend2","friend3"]
for(var index in friends){
	console.log(friends[index])
}

}

function circumference(radius){
	var circumference = 2 * 3.14 * radius
	return circumference
}

function draw() {
  background(255,255,255);  
  drawSprites();
}