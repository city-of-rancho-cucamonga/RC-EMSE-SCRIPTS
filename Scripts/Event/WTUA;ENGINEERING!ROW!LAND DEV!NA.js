
// DISABLED: WTUA:Engineering/ROW/Land Dev/NA:01
// if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
// 	editAppSpecific('KEY DATES.Permit Issued',wfDateMMDDYYYY);
// 	editAppSpecific('KEY DATES.Permit Expires', dateAdd(wfDateMMDDYYYY,90));
// 	}

if (wfTask == 'City Council' && wfStatus == 'Improvements Accepted') {
	scheduleInspection('Maintenance Bond Release',300);
	}

