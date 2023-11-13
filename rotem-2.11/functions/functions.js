
// classic functions (function keyword)
function myFn() {}

// fat arrow function (use => )

let myFn = ()=>{};

// anonymous function (classic)

(function () {})

// anonymous function (fat arrow)
(()=>{})

// IIFE (classic)
(function (){})()  // () -> function invocation ()

// IIFE (fat arrow)
(()=>{})()

// parameters:

function MyFunc(param1, param2) {
	console.log(arguments[0]) // show the first parameter (array-like) (classic function only)
}

const myArrowFunc = (param1, param2)=>{
	// no arguments array in fat arrow function!
}


const myFunc = ()=>{

};

setTimeout(myFunc, 1000)


fetch(someURL).then(()=>{

})



