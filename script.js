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
var personProto = {
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

var a = 54;
var b = a;
a = 45;
console.log(a); //45
console.log(b); //54
//when a primitiveis stored in a variable it stores its copy.
