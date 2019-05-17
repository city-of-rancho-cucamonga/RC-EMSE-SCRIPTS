
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && balanceDue > 0) {
	cancel=true;
	showMessage=true;
	logMessage('Unable to issue the permit because there is a balance due $ ' + balanceDue);
	}

