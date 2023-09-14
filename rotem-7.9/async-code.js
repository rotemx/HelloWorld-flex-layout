//Sync Code:
setTimeout(()=>{
	// ... this will run IN THE FUTURE:
	console.log('This will run in the future');
}, 5000)

console.log(1);
console.log(2);
console.log(3);
//event loop


// There are 3 ways (APIs)
// the browser gives us to use ASYNC CODE.
// (not necessarily async function)


// Ways to write ASYNC CODE:
// 1. setTimeout

// setTimeout(()=>{
//     // ...
// 	console.log('This will run in the future');
// }, 5000)

// 2. setInterval
const callBack = ()=>{
	// ... this will run IN THE FUTURE:
	console.log('This will every 500 ms');
};

setInterval(callBack, 0)

// XMLHttpRequest - AJAX - Asynchronous JavaScript XML
// fetch()


// SSR - server-side rendering
// .net - C# + RAZOR template language -> PHP -> Ruby
// node.js - EJS template language
// thin client - most of the work is at the server side
// memegenerator.net -


// React - Angular - VUE - using AJAX
// Rich Client - most of the processing is at the client side
// Ajax request is sent and a JSON response is received.

