function compareObjects(a, b)
{
	
	if (Object.keys(a).length !== Object.keys(b).length)
	{
		console.log("Wrong number of properties!", a, b);
		return false
	}
	
	for (const key in a)
	{
		console.log(`Checking ${key}... `);
		const
			valueA = a[key],
			valueB = b[key];
		
		if (typeof valueA !== typeof valueB)
		{
			console.log('Wrong typeof!');
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
				console.log(`${key}: Primitive value not equal - ${valueA} !== ${valueB}`);
				return false
			}
	}
	return true
}

const
	obj1 = {
		size   : 3,
		color  : "Red",
		shape  : "Square",
		address: {
			street: "Jaffo"
		},
		city   : "Tel Aviv"
	},
	obj2 = {
		color  : "Red",
		size   : 8,
		shape  : "Square",
		address: {
			street: "Jaffo"
		},
		city   : "Tel Aviv"
	}

console.log("RESULT:");
console.log(compareObjects(obj1, obj2))
