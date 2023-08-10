const
	first = prompt('enter first').toLowerCase(),
	second = prompt('enter second').toLowerCase();

const isIncluded = first.includes(second) || second.includes(first);

document.write(isIncluded ? "<h1>Yes</h1>" : "<h1>No</h1>")
