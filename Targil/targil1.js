let userInputParsed;

do
{
	const
		userInputStr = prompt('Enter a value:');
	
	userInputParsed = JSON.parse(userInputStr);
	
	console.log('userInputParsed ', userInputParsed);
	console.log('typeof userInputParsed', typeof userInputParsed);
}
while (userInputParsed !== 7)
