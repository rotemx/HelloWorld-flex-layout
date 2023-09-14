(function first(){
	(function second(){
		(function third(){
			debugger;
			console.log(3 + ' eneded');
		})()
		console.log(2 + ' ended');
		
	})()
	console.log(1 + ' ended');
})()
// IIFE
