const QUERY = "boom";


function boomCheck(str)
{
	if (typeof str !== "string")
	{
		return "Error"
	}
	if (str.includes(QUERY))
	{
		
		const
			firstIdx = str.indexOf(QUERY),
			lastIdx  = str.lastIndexOf(QUERY);
		
		return (firstIdx === lastIdx)
	}
	return 17
	
	// (why else is not needed?)
	// 1. function without "return" or only "return" with no value,
	// returns undefined.
	// 2. undefined is falsy
	// undefined === false  (is false!)
}

if (boomCheck("xxxboom") === false)
{

}


//DRY - do not repeat yourself!


// operator = sign
// unary operators: only one parameter:
// +"5", c++, i++

// binary operators - two parameters:
// 7 + 3, 10 / 2 , 5%2, "hello" + " world", 10 > 8 , 9 === 10, 16 >= 17

// ternary operator (three parameters)

// condition ? ifTrue : ifFalse
// return (1 > 2 ? "Yes" : 19) (expression)
// if (1>2) {return "Yes"} else {return 19}

