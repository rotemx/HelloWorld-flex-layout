function noParamsFunction() {
	console.log(arguments[0])
}

noParamsFunction("param one")

function undefinedParam(param1) {
	console.log(arguments[1]);
}

undefinedParam("param1", "param2"); // undefined parameter
