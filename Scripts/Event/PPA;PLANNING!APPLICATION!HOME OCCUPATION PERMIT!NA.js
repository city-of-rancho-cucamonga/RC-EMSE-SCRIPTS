
if (balanceDue == 0 && isTaskActive('Permit Issuance')) {
	closeTask('Permit Issuance', 'Issued', 'Updated via script', '');
}
