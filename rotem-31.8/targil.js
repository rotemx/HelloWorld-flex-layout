const people = {
	name     : "John",
	age      : 59,
	isMarried: true,
	children : [
		{
			name    : "James",
			age     : 12,
			children: []
		},
		{
			name    : "Jane",
			age     : 45,
			children: []
		}]
}

// write a function to transform the object into array of name and age TUPLE.
// (we don't know how many levels are there);

//example :
let requiredResult = [["John", 59], ["James", 12], ["Jane", 45]];


function extractNamesAndAgesFromObjects(obj)
{
	console.log(typeof obj, 'typeof obj');
	if ((typeof obj !== "object") || obj === null || !(obj?.name) || !(obj?.age))
	{
		throw new Error('invalid people object');
	}
	
	let result = [[obj.name, obj.age]];
	
	if (obj.children?.length)
	{
		result = [...result, ...obj.children?.map(child => extractNamesAndAgesFromObjects(child)).flat()];
	}
	return result
}

console.log(extractNamesAndAgesFromObjects(people));










