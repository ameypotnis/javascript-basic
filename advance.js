//assign function to variable
var hello = function() {
    console.log('hello');
}
hello();

//variable scope
function myFunction() {
    var myVar = 10;
    console.log(myVar);
}
myFunction();
//console.log(myVar);// - error


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

var Person = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

var person1 = new Person('Abc', 'Pqr', 20);
console.log('person1: ' + person1);
