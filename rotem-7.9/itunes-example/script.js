const params = ("term=depeche mode");

const URL = "https://itunes.apple.com/search?" + params;

const req        = new XMLHttpRequest();
req.responseType = 'json';

req.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200)
	{
		const {results} = this.response;
		
		results.forEach(result=> {
			$('#results').append(`
<br>
<div>${result.artistName}</div><div> ${result.trackName} </div>
<br>

<audio
	src="${result.previewUrl}"
	preload="auto"
	controls
></audio>
`)
		})
		
	}
};

req.open("GET", URL);
req.send();

