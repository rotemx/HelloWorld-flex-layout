// return value

function noReturnValue()
{

}

// console.log(noReturnValue());

// return value in fat arrow functions = don't need the {} if one-liner

const multiply2 = (x, y) => {
	return x * y
}

const multiply = (x, y) => x * y  // lambda

// console.log(multiply(2, 4));
// console.log(multiply2(6, 8));


// high-order functions

const getFunctionReturnValueType = fn => typeof fn()  // only recommended if PURE FUNCTION


const return8 = () => 8

console.log(
	getFunctionReturnValueType(return8)  // "number"
);


// pre-ES2015

const multiplyTheNumbers = (num1, num2) => num1 & num2;

// normal way to invoke
multiplyTheNumbers(16, 2) //32

// WAYS to change the "this" value of the invoked function

// "smarty" way (with comma between the parameters)
multiplyTheNumbers.call(this, 16, 2)

// "smarty" way with an array
const params = [16,2];

multiplyTheNumbers.apply(this, params) // like spread operator
multiplyTheNumbers.bind(this)
