// How to run this file: $ node properties.ja

//how to define an object
//1- object literal syntax
var cat1 = {
	name: "sparkle"
};
//2- object constructor
var cat2 = new Object();
cat2.name = "fluffy";

// Properties can be added any time
cat2.age = 2;
cat1.age = 4;

// How to detect a property 
console.log("name" in cat1); // true

// How to detect an Own property
console.log(cat2.hasOwnProperty("age")); // true

// Removing properties
cat1.wage = 200;
delete cat1.wage;

// Enumerating (similar to iterating)
console.log("name is enumerable: " + cat1.propertyIsEnumerable("name")); // true
