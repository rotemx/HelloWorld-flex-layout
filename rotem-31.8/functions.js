let x = 1;
console.log(x);

(
	function () {
		let x = 2;
		(function (){
			let x = 3;
			(function (){
				let x = 4;
				console.log(x);
				debugger;
			})();
			console.log(x);
		})()
		console.log(x);
		
	} //anonymous function (classic function)
)();  //IIFE = Immediately Invoked Function Expression


(
	 ()=> {
		
	} //anonymous function (FAT Arrow)
)()  //IIFE = Immediately Invoked Function Expression

let arr = [1, 2, 3];
var globalVar = 8;

arr.filter(x => x >= 2)
//          ^^^^^^ anonymous function
