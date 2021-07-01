// Array literal sintax
const myCars = ['Ferrari', 'Porsche', 'Audi', 'Mercedes Benz'];

// Using new keyword
const webTechnologies = new Array('HTML','CSS','JS');

// Access the elements
const markupLanguage = webTechnologies[0];// HTML

// Arrays are objects and have properties and methods
const howManyTechnologies = webTechnologies.length;// 3

// Looping the Array
// for Loop
//foreach loop, a method
myCars.forEach(function( car) {
  console.log('a car: '+ car);
});

// add item at the end
myCars.push('Volvo');
// remove from the end
myCars.pop(); //returns last element
// shift and unshift(item) remove and add at the beginning
