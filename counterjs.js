//set an initial variable that will hold the count i.e the numbers that user will get through pressing buttons
var count = 0;

//here we use getElementById() and addEventListener() methods from document interface and EventTarget interface respectively 
document.getElementById("increase").addEventListener("click", increase);

//same as above
document.getElementById("decrease").addEventListener("click", decrease);


//to simply the program we separated the functions from the addEventListener()
//we can write these below functions as arrow functions in addEventListener()
//but for simplicity we isolated them so that it's easier for beginners to understand

//below functions are simply incrementing and decrementing the count variable that weset at top 
// and displaying the latest value in the webpage with .innerHTML property
function increase(){
        count++;
        document.getElementById("count").innerHTML= count;
        
    
}

function decrease(){
    count--;
    document.getElementById("count").innerHTML = count;
}

