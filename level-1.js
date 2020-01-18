// question 1
var myName = "Jelena";

//question 2

var person = {
    gender: "female",
    age: 32
}

//question 3

var outOfStock = true;

if (outOfStock===true) {
    console.log("Out of stock");
}

else{
    console.log("In stock")
}

//question 4

var numbers = [25, 36, 47, 58, 69];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
  
//question 5

for (var i=15; i<=25; i++){
    console.log(i);
}

//question 6

for (var i=15; i<=25; i++){
    if (i === 20){
        console.log(i);
    }
}

//question 7

var dogs = [
    {
        breed: "golden retriver",
        age: 7,
        sterilised: true
    },
    {
        breed: "rottweiler",
        age: 2,
        sterilised: false
    }
];

for (var i=0; i < dogs.length; i++){
    console.log(dogs[i].age);
    console.log(dogs[i].sterilised);
}

//question 8

function whatIDontLike(typeOfFood) {
    console.log("I dont like" + typeOfFood); 
    }
    
    whatIDontLike("aubergine");

//question 9

function subtractNumbers (firstNumber, secondNumber) {
    var total = firstNumber - secondNumber;
    console.log(total);
}

subtractNumbers (60,35);

//question 10

var iceCream = [];

function myFavouriteFlavours(firstFlavour){
    var iceCream = firstFlavour;
    console.log("My favourite ice-cream is" + " " + iceCream);
}

    myFavouriteFlavours("pistachio");



