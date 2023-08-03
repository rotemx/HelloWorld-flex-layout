let userInputParsed;
let userInputStr
do
{
	userInputStr = prompt('Enter a value:');
	
	userInputParsed = JSON.parse(userInputStr);
	
	const type = typeof userInputParsed;
	
	console.log('userInputParsed ', userInputParsed);
	console.log('typeof userInputParsed', type);

	
	if (userInputParsed === 7) {
		console.log("Boom!");
		break
	}
	const yesTypes = ['number', 'string', 'boolean'];
	
	let anyRuleApplied;
	
	if (yesTypes.includes(type))
	{
		anyRuleApplied = true;
		console.log("Yes");
	}
	if (!userInputParsed)
	{
		anyRuleApplied = true;
		console.log("False");
	}
	
	if (!anyRuleApplied){
		console.log('No');
	}
}
while (userInputParsed !== 7 && userInputStr !== null)


// DRY - do not repeat yourself
