function showKeysDeep(obj)
{
	let str = '';
	for (const key in obj)
	{
		str += ' ' + key;
		if (typeof obj[key] === "object")
		{
			for (const innerKey in obj[key])
			{
				str += ' ' + innerKey;
			}
		}
		
	}
	return str;
}


const person = {
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
						aptNumber: 89,
						rooms : {
							room1 : {
							
							}
						}
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


console.log(showKeysDeep(person));
