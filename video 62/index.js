/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
let adjectives={
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
let ShopName={
1:"Engine",
2:"Foods",
3:"Garments"
}
let AnotherWord={
 1:"Bros",
 2:"Limited",
 3:"Hub"
}
let first,second,third;
random=Math.floor( Math.random() * 10 );
if(random<3){
    first=adjectives[1];
}
else if(random>3 && random<6){
    first=adjectives[2];
}
else{
    first=adjectives[3];
}
random=Math.floor( Math.random() * 10 );
if(random<3){
    second=ShopName[1];
}
else if(random>3 && random<6){
    second=ShopName[2];
}
else{
    second=ShopName[3];
}
random=Math.floor( Math.random() * 10 );
if(random<3){
    third=AnotherWord[1];
}
else if(random>3 && random<6){
    third=AnotherWord[2];
}
else{
    third=AnotherWord[3];
}
console.log(first,second,third);