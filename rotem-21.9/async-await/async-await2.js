function returnPromiseOf17()
{
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve(17)
		}, 4000)
	})
}

// regular usage - then:
returnPromiseOf17()
	.then(value => {
		console.log(value);
		console.log("DONE!");
	})

//inside async function: use await
async function MyAsyncFunction(){
	
	let value = await returnPromiseOf17(); // The program will WAIT here !!
	console.log(`value is ${value}`); //value is available like it is inside ".then()"
	//
	console.log("DONE!"); //==> it is like inside the "then()"
}
//
