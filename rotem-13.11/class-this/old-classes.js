// pre-2015 syntax

// in old javascript, every function is a potential constructor
function Person(name) {
	console.log(`constructing Person named ${name} `);
	this.name = name;
	// "this" is the instance
}

let john = new Person("John");

console.log(john);
console.log("name is " + john.name);
