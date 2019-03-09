/*//Function Constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//creating a new method for our Person object with prototype property so that all the new variables created will have access to this 
//method or we can say Inherit this method

Person.prototype.caculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

//even properties can be prototyped
Person.prototype.lastName = "smith";

//creating our new objects with the help of funtion constructors
var john = new Person("john", 1990, "teacher");
var jane = new Person("jane", 1969, "designer");
var mark = new Person("mark", 1948, "retired");

john.caculateAge();
jane.caculateAge();
mark.caculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// my function constructor
var Cricketer = function(name, BattingStyle, Matches, runs, centuries) {
  this.name = name;
  this.BattingStyle = BattingStyle;
  this.Matches = Matches;
  this.runs = runs;
  this.centuries = centuries;
};

Cricketer.prototype.Average = function() {
  console.log(this.runs / this.Matches);
};

var sachin = new Cricketer("Sachin Tendulkar", "Right Handed", 463, 18426, 49);
var ganguly = new Cricketer("Saurav Ganguly", "Left Handed", 311, 11362, 22);

console.log(sachin, ganguly);

sachin.Average();
ganguly.Average();*/

//object.create method

//first we have to create the prototype as simple object
/*var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

//creating the new object by object.create method and passing the prototype as the argument
var john = Object.create(personProto);
john.name = "john";
john.yearOfBirth = 1990;
john.job = "teacher";
console.log(john);

//another way of filling the object
var jane = Object.create(personProto, {
  name: { value: "jane" },
  yearOfBirth: { value: 1996 },
  job: { value: "designer" }
});
console.log(jane);

//Primitives vs Objects

//Primitives
var a = 54;
var b = a;
a = 45;
console.log(a); //45
console.log(b); //54
//when a primitiveis stored in a variable it stores its copy.

//objects
var obj1 = {
  name: "john",
  age: 26
};

var obj2 = obj1;

obj1.age = 40;

console.log(obj1.age); //40
console.log(obj2.age); //40
//refer notes

//Functions
var age = 30;

var obj = {
  name: "fahad",
  city: "mumbai"
};

function change(a, b) {
  a = 26;
  b.city = "america";
}

change(age, obj);
console.log(age, obj.city);*/

//Passing Functions as arguments

/*var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrResult = [];
  for (var i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}

//functionto calculate ages
function calcAge(el) {
  return 2016 - el;
}

//function to know is the person is of full age
function isFullAge(el) {
  return el >= 18;
}

//function to calculate max heart rate while workout, applies only for adults
function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var heratRates = arrayCalc(ages, maxHeartRate);
console.log(heratRates);*/

//functions returning functions
/*function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you expalin what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + ", which subject do you teach?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + " , what do you do");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("john");

var designerQuestion = interviewQuestion("designer");
designerQuestion("Azaan");

// we can create bunch of it
designerQuestion("jayesh");
designerQuestion("sagar");

// Another way of doing it without assigning function in variable;
interviewQuestion("teacher")("monu");*/

// IIFE Immediately Invoked Function Expression.
// want to build game but hide the score (Refer the Notes)
// Normal way of doing it :-
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// Now the IIFE way:-
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

//console.log(score); // Error because score is not defined in global scope.

// Passing Argument in IIFE
(function(goodluck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(5); //always true because score will always be greater than zero.
