function delayRun(numbers, i = 0, sum = 0)
{
	let num = numbers[i];
	sum += num;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`num is ${num}`);
			console.log(`sum is ${sum}`);
			if (i === numbers.length - 1)
			{
				return resolve();
			}
			delayRun(numbers, ++i, sum)
				.then(() => {
					      resolve()
				      }
				)
		}, num * 1000)
	})
}

const numbers = [1, 1, 1, 1, 10];
console.log("Begin!");
delayRun(numbers)
	.then(() => {
		console.log("Done!");
	})
