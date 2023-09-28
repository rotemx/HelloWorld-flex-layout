// async code -- callback

const callBack = () => {
	console.log('HELLO!');
};
setTimeout(callBack, 1000)

//async code - promise - (bluebird / Q)
// Promise class - js native

function runInSeconds(fn, seconds)
{
	return new Promise((resolve, reject) => {
		//...
		setTimeout(()=>{
			resolve(fn())
		}, seconds * 1000)
		
	})
}

// required usage:

runInSeconds(() => {
	console.log('this is the future!');
	return 17
}, 3)
	.then((value) => {
		console.log('value is: ' + value); //17
		console.log('This is run after the future');
	})
// after 3 seconds:
// 'this is the future!'
// 'This is run after the future'

