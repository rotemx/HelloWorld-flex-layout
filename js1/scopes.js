// block-level scope (let + const)
let x;
{
	x       = 8;
	const y = 9;
	{
		const z = 19;
		console.log(y);
	}
}

console.log(x);


function hoistVar()
{
	console.log('before ' + x);
	
	var x = 9;
	console.log('after ' + x);
}

hoistVar()

function hoistLetConst()
{
	let x = 9;
	console.log('before ' + x);
	
	console.log('after ' + x);
}

hoistLetConst()

function myFn() {
	let x;
	let x;
	
}

nyFn();














