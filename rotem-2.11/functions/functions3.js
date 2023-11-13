const restParamsFunc = (...params) => { //rest parameters - unlimited number of parameters
	console.log(params[2]);
}

restParamsFunc(1,2,3,4,5)

const defaultValueParam = (param1 = "Hello")=>{
	console.log(param1);
}
defaultValueParam()
defaultValueParam("World")

