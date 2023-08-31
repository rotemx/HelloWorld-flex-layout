function compareObjects(a, b)
{
	
	if (a === null || b === null)
	{
		return a === b
	}
	
	
	if (Object.keys(a).length !== Object.keys(b).length)
	{
		console.log("Wrong number of properties!", a, b);
		return false
	}
	
	const PRIMITIVE_TYPES = ["number", "boolean", "string"];
	
	if (PRIMITIVE_TYPES.includes(typeof a))
	{
		return a === b
	}
	
	for (const key in a)
	{
		console.log(`Checking ${key}... `);
		const
			valueA = a[key],
			valueB = b[key];
		
		if (typeof valueA !== typeof valueB)
		{
			console.log(`${key} Wrong typeof! ${typeof valueA} is not equal to ${typeof valueB}  `);
			return false
		}
		
		if (valueA === undefined)
		{
			if (valueB === undefined)
			{
				continue;
			}
			console.log(`${key} valueA is undefined and valueB is not.`);
			return false
		}
		
		
		if (typeof valueA === "object")
		{
			console.log(`${key}: checking objects`);
			if (!compareObjects(valueA, valueB))
			{
				console.log(`${key} Objects are not similar`);
				return false
			}
		} else
			if (valueA !== valueB)
			{
				console.log(`${key}: ${typeof valueA === "function" ? "Function" : "Primitive"} value not equal - ${valueA} !== ${valueB}`);
				return false
			}
	}
	return true
}

const
	fn   = () => {
		console.log('walking');
	},
	obj1 = {
		
		empty  : undefined,
		walk   : fn,
		size   : 3,
		color  : "Red",
		shape  : "Square",
		address: {
			street: "Jaffo"
		},
		city   : "Tel Aviv",
		car    : null,
		numbers: [1, 2, 3],
		// blah   : obj2,
		obj1,
	},
	obj2 = {
		obj2,
		// blah   : obj1,
		walk   : fn,
		empty  : undefined,
		numbers: [1, 2, 3],
		color  : "Red",
		size   : 3,
		shape  : "Square",
		address: {
			street: "Jaffo"
		},
		city   : "Tel Aviv",
		car    : null
	}

console.log(obj1.numbers === obj2.numbers, 'obj1.numbers === obj2.numbers');
console.log("RESULT:");
console.log(compareObjects(obj1, obj2))
