
if (wfTask == 'Inspections' && wfStatus == 'Passed') {
	closeTask('Permit Issuance', 'Issued', 'Closed via Script', '');
	closeTask('Closed', 'Closed', 'Closed via Script', '');
}
