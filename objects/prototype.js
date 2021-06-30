// from TOP->javascript.info/prototype-inheritance
// exercises
// run: $node prototype.js
let head = {
	glasses: 1
};
let table = {
	pen: 3
};
let bed = {
	sheet: 1,
	pillow: 2
};
let pockets = {
	money: 2000
};

// Use __proto__ to create inheritance
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
//pockets.pen should be 3
console.log(pockets.pen);
// bed.glasses should be 1
console.log(bed.glasses);

let animal = {
	eat() {
		this.full = true;
	}
};
let rabbit = {
	__proto__:animal
};

rabbit.eat(); //rabbit receives the full property
							// because this references the object which
							// calls the eat() function, even when
							// the function itself is declare in the rabbit prototype

// hamsters
let hamster = {
	stomach: [],
	eat(food) {
		this.stomach.push(food);
	}
};
let speedy = {
	stomach: [],
	__proto__:hamster
};
let lazy = {
	stomach: [],
	__proto__: hamster
};

speedy.eat("apple");
console.log(speedy.stomach); //apple

console.log(lazy.stomach); // apple. Why?
//Because both instances share the stomach property I think
