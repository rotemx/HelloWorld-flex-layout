// async code

console.log("This is the beginning");

function func1()
{
	console.log("This is function one");
}

function func2()
{
	console.log("This is function two");
}

setTimeout(func2)
setTimeout(func1)

console.log("This is the end");
