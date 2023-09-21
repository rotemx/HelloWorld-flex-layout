const params = ("term=depeche mode");

const URL = "https://itunes.apple.com/search?" + params;

console.log('Before');
fetch(URL)
	.then((responseData) => {
		console.log("Inside .then() ");
		console.log(responseData, 'result');
		
		responseData
			.json()
			.then((jsonData) => {
				console.log("Inside .then() .then() ");
				
				console.log(jsonData, 'jsonData');
				jsonData.results
				        .filter(song=>song.trackName)
				        .forEach(song => document.write('<h2>' + song.trackName + '</h2><br>' + '<br>'))
			})
	})

console.log("After");

// home TARGIL:
// USAGE :
// delayRun(() => 19, 3)
//      .then(data=>{
//          console.log(data); //19
//      })













//













