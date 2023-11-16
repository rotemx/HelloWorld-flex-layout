// OOP - Object-Oriented Programming

// ES6 / ES2015 syntax

class Person {
	// constructor is run every time a new instance is created.
	constructor(name, age)
	{
		this.name = name;
		this.age  = age
	}
	
	name
	
	walk()
	{
		console.log(`${this.name} is WALKING`);
		// "this" is the instance that will be created (constructed) in the future === john
	}
	
	getAge()
	{
		return this.age
	}
	
}


// "new" means to create a new instance of the class;
// "Person" is the constructor
const john = new Person("John", 32);
// john is an INSTANCE of "Person"

// john.name = "John";

// "name" and "walk()" are prototype property (name) and method (walk())


const james = new Person("James", 48);

// john.walk();
// james.walk();
// console.log(john.getAge());
// console.log(james.getAge());

john.walk.call(james)
// ===
// john.walk.bind(james)()

const fn = john.walk.bind(james);

fn()
