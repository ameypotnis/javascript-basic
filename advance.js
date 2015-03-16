//variable scope
function myFunction() {
    var myVar = 10;
    console.log(myVar);
}
//console.log(myVar); - error


//function in function
function getCircleArea(redius) {
    function getPi() {
        return (22/7);
    }
    return getPi() * redius * redius;
}
console.log(getCircleArea(10));
console.log(getCircleArea(20));

//self executing function
(function selfExecute() {
    console.log('I am calling myself');
})();

//assign function to variable
var hello = function() {
    console.log('hello');
}
hello();

//callback function
function calculator(a, b, callback) {
    return callback(a, b);
}

function addition(a, b) {
    return a + b;
}

function substraction(a, b) {
    return a - b;
}
console.log(calculator(5, 2, addition));
console.log(calculator(5, 2, substraction));
