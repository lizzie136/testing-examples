const add = (a, b) => {
	return a + b;
};

const divide = (a, b) => {
	return a / b;
}

const multiply = (a, b) => {
	return a * b;
}

const rest = (a, b) => {
	return a - b;
};

const operate = (operation, a, b) => {
	// return add(a, b);
	// return (operation === 'add')? add(a, b) : rest(a,b);
	switch (operation) {
		case 'add':
			return add(a, b);
		case 'rest':
			return rest(a, b);
		case 'divide':
			return divide(a, b);
		case 'multiply':
			return multiply(a, b);
		default:
			throw new Error(`Unexpected operation. We don't support operation ${operation}.`);
	}
}

// const isOperation = (operation) => 

module.exports = {
	add,
	divide,
	multiply,
	operate,
	rest,
};