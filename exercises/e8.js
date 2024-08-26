// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
	const cusWithGreatesBal = [];
	let maxBal = array[1];

	for (let user of array)
		if (user.balance > maxBal.balance) {
			maxBal = user;
			cusWithGreatesBal.push(user);
		}
	return cusWithGreatesBal;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
