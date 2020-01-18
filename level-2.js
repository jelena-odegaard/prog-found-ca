//question 1

for (var i=15; i<=25; i++){
    if (i % 2 === 0) {
    console.log(i);   
}
}

//question 2

function logSentence(){
    console.log("I am a function");
}

logSentence(); 

var innerFunction = function logSentence(){
    console.log("I am a function");
}

logSentence();

function outerFunction(secondSentence){
    secondSentence();
}

outerFunction("var innerFunction");



