// named function
function myFunc()
{
}

// named fat-arrow function
const myFunc2 = () => {

}

//anonymous fat arrow function (expression, not a declaration statement)
() => {

}

// key-value pairs

//literal object
let obj = {
	age : 17,
	name: "John",
	//nested objects
	address: {
		street  : "Yaffo",
		number  : 42,
		city    : "Tel Aviv",
		building: {
			floor: {
				apartment:
					{
						aptNumber: 89
					}
			}
		}
	},
	//nested arrays
	numbers: [
		2, 4, 7, 8, -9
	],
	//methods - anonymous function
	displayWarning: function () {
		console.log('Warning!');
	},
	//methods = fat arrow functions
	displayGreeting: () => {
		console.log('Hello!');
	}
}

// example output: "age name address street number city numbers displayWarning displayGreeting

for (let i = 0; i < obj.length; i++)
{
	const objElement = obj[i];
	
}
