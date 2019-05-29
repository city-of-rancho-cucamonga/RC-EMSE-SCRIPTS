
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('KEY DATES.Permit Issued', wfDateMMDDYYYY);
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && AInfo['Expire Date'] != undefined && AInfo['Expire Date'] != '') {
	editAppSpecific('KEY DATES.Permit Expires', AInfo['Expire Date']);
}

if (wfTask == 'Closed' && wfStatus == 'Finalize Permit') {
	editAppSpecific('KEY DATES.Final', wfDateMMDDYYYY);
}

if (wfTask == 'Permit Extension' && wfStatus == 'Approved') {
	editAppSpecific('KEY DATES.Permit Expires', AInfo['New Expiration Date']);
}
