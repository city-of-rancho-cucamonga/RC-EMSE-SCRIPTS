
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('KEY DATES.Issued', wfDateMMDDYYYY);
	editAppSpecific('KEY DATES.Closed', wfDateMMDDYYYY);
	closeTask('Closed', 'Closed', 'Closed via Script', '');
}
