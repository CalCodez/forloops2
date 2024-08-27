// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
	const incorrectBal = [];
	for (let i = 0; i < array.length; i++) {
		const customer = array[i];
		let depoSum = 0;
		let withdrawalSum = 0;

		if (customer.deposits && customer.deposits.length > 0) {
			for (let x = 0; x < customer.deposits.length; x++) {
				depoSum += customer.deposits[x];
			}
		}
		if (customer.withdrawals && customer.withdrawals.length > 0) {
			for (let j = 0; j < customer.withdrawals.length; j++) {
				withdrawalSum += customer.withdrawals[j];
			}
		}

		if (depoSum - withdrawalSum != customer.balance)
			incorrectBal.push(customer);
	}
	return incorrectBal;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
