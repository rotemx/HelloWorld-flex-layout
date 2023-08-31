const people = {
	name: "John",
	age: 59,
	isMarried : true,
	children : [{
		name: "James",
		age : 12,
		children: []
	},
		{
			name : "Jane",
			age:45,
			children: [{
				// ..
			}]
		}]
}

// write a function to transform the object into array of name and age TUPLE.
// (we don't know how many levels are there);

//example :
let requiredResult = [["John", 59],["James",12], ["Jane", 45]];














