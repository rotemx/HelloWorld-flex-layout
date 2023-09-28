function returnPromiseOf17()
{
	return Promise.resolve(17)
}


returnPromiseOf17()
	.then(value => {
		console.log(value)
	})


// Classic Function:
async function getItunesData() {}

//Fat Arrow Function:
const getItunesSongData = async () => {}

// Anonymous Function:
items.forEach(async () => {})
items.forEach(async function() {})
	
	// IIFE - Immediately Invoked Function Expression:
	
	 (async function () {})()
     (async () => {})()

//Inside an Object or Array:

let person = {
	walk: async () => {}
}

let functions = [
	async () => {},
	async function () {}
]

