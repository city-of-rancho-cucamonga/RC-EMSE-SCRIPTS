
if (wfTask == 'Permit Extension' && wfStatus == 'Approved') {
	editAppSpecific('ENG_LCP_DATES.Permit Expires',AInfo['New Expiration Date']);
	}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('ENG_LCP_DATES.Permit Issued',wfDateMMDDYYYY);
	}

if (wfTask == 'Permit Closure' && wfStatus == 'Closed') {
	editAppSpecific('ENG_LCP_DATES.Final',wfDateMMDDYYYY);
	}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && AInfo['Expire Date'] != undefined && AInfo['Expire Date'] != '') {
	editAppSpecific('ENG_LCP_DATES.Permit Expires',AInfo['Expire Date']);
	}

