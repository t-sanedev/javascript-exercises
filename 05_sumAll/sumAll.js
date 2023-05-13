const sumAll = function (num1, num2) {

	let sum;

	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		sum = 'ERROR';
	} else if (num1 >= 0 && num1 >= num2) {

		sum = 0;
		for (let i = num1; i >= num2; i--) {
			sum += i;
		}
	} else {
		sum = 0;
		for (let i = num2; i >= num1; i--) {
			sum += i;
		}

	}

	return sum;

};

// Do not edit below this line
module.exports = sumAll;

