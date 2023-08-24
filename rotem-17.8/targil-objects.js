const userInfo = {
	age            : 22,
	name           : "Nissim",
	numbers        : [
		2, 4, 7, 8, -9
	],
	displayWarning : function () {
		console.log("Warning!");
	},
	displayGreeting: () => {
		console.log('Hello!');
	}
}

function listObjKeys(obj)
{
	let values = [];
	for (let key in obj)
	{
		if (obj.hasOwnProperty(key))
		{
			values.push(obj[key]);
		}
	}
	
	let result = JSON.stringify(Object.values(obj))
	                 .replace(/["{}]/g, '')
	                 .replace(/[,:\[\]]/g, ' ');
	return result;
}

console.log(listObjKeys(userInfo));
