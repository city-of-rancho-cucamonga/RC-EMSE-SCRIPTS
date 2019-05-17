
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && balanceDue > 0 && appTypeArray[3] != 'Permanent') {
	cancel=true;
	logMessage('Permit cannot be issued until balance due of $ ' + balanceDue + ' is paid.');
	}

if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && balanceDue > 0 && appTypeArray[3] != 'Permanent') {
	cancel=true;
	logMessage('Permit cannot be issued until balance due of $ ' + balanceDue + ' is paid.');
	}

