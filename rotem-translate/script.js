let resultTextarea, searchInput;

async function detectLanguage()
{
	const q       = searchInput.value;
	const url     = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
	const options = {
		method : 'POST',
		headers: {
			'content-type'   : 'application/x-www-form-urlencoded',
			'Accept-Encoding': 'application/gzip',
			'X-RapidAPI-Key' : '4ab696ee4dmshc8b0636209ff94ap112a5djsn9e9d89aef43c',
			'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
		},
		body   : new URLSearchParams({q})
	};
	
	try
	{
		const response = await fetch(url, options);
		const result   = JSON.parse(await response.text());
		console.log(result, 'result');
		return result?.data?.detections[0][0]?.language
	} catch (error)
	{
		console.error(error);
	}
}


async function sendTranslateRequest(q, target, source = "en")
{
	const url     = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
	const options = {
		method : 'POST',
		headers: {
			'content-type'   : 'application/x-www-form-urlencoded',
			'Accept-Encoding': 'application/gzip',
			'X-RapidAPI-Key' : '4ab696ee4dmshc8b0636209ff94ap112a5djsn9e9d89aef43c',
			'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
		},
		body   : new URLSearchParams({
			                             q,
			                             target,
			                             source
		                             })
	};
	
	try
	{
		const response = await fetch(url, options);
		const result   = JSON.parse(await response.text());
		console.log(result);
		const msg = result?.data?.translations[0]?.translatedText || result?.error?.message;
		console.log(msg, 'msg');
		resultTextarea.textContent = msg;
	} catch (error)
	{
		console.error(error);
	}
}

async function getLanguages()
{
	const url     = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
	const options = {
		method : 'GET',
		headers: {
			'Accept-Encoding': 'application/gzip',
			'X-RapidAPI-Key' : '4ab696ee4dmshc8b0636209ff94ap112a5djsn9e9d89aef43c',
			'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
		}
	};
	
	try
	{
		const response = await fetch(url, options);
		return JSON.parse(await response.text()).data.languages;
		
	} catch (error)
	{
		console.error(error);
	}
}


addEventListener("DOMContentLoaded", async (event) => {
	const
		searchBtn = document.getElementById('search-btn'),
		selectEl  = document.getElementById("lan-select");
	
	searchInput = document.getElementById('search-input');
	
	resultTextarea    = document.getElementById('result');
	searchBtn.onclick = async () => {
		const lan = selectEl.value;
		console.log("sending translation request: " + searchInput.value + " language: " + lan);
		const sourceLan = await detectLanguage();
		if (!sourceLan)
		{
			alert("ERROR in detecting language!")
		} else
		{
			sendTranslateRequest(searchInput.value, lan, sourceLan)
			
		}
	}
	
	const languages = await getLanguages();
	
	languages.forEach(lan => {
		
		const lan_code = lan.language;
		if (lan_code === 'en')
		{
			return
		}
		
		const optionEl = document.createElement('option')
		
		optionEl.text = lan_code;
		optionEl.setAttribute("value", lan_code);
		selectEl.appendChild(optionEl)
	})
	
	selectEl.onchange = (event) => {
		console.log(event.target.value + " language was selected");
	}
});












