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

//Creating functions
function greeting(name) {
    console.log('hello ' + name);
}
greeting('Abc');
greeting('pqr');

