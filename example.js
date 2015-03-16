//Creating variables
var count = 10;
console.log('count= ' + count);

count = "ten";
console.log('count= ' + count);

var name = "Abc"
console.log('name= ' + name);

var amount = 10.99;
console.log('amount= ' + amount);

//Working with conditional code
var age = 66;
if (age > 60) {
    console.log('is senior citizen');
} else {
    console.log('is not senior citizen');
}

//Working with operators
var number1 = 10, number2 = 20, number3;
number3 = number1 + number2;
console.log('addition= ' + number3);
number3 = number2 - number1;
console.log('substraction= ' + number3);

//Working with loops
for(var count=0; count<10; count++) {
    console.log('count: ' + count);
}

var number = 10;
while(number > 0) {
    console.log('number: ' + number);
    number--;
}


//Variable types
// Number
var length = 16;
console.log("type of length: " + typeof length);
// String
var lastName = "Pqr";
console.log("type of lastname: " + typeof lastName);
// Array
var colors = ["Red", "Blue", "Green", "White"];
console.log("type of colors: " + typeof colors);
// Object
var person = {firstName:"Abp", lastName:"Pqr"};
console.log("type of person: " + typeof person);

//Creating functions
function greeting(name) {
    console.log('hello ' + name);
}
greeting('Abc');
greeting('pqr');

function addition(number1, number2) {
    number3 = number1 + number2;
    return number3;
}
console.log(addition(30,20));
console.log(addition(50,40));


//Working with arrays
var colors = ["Red", "Blue", "Green", "White"];
for(index in colors) {
    console.log("color index: " + index);
    console.log("color: " + colors[index]);
}

var collection = [1, "Abc", 9.99, {"name" : "Abc"}];
for(index in collection) {
    console.log("collection item: " + collection[index]);
}
