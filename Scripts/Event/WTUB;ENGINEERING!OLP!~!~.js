
if (wfTask == 'Permit Issuance' && wfStatus == 'Permit Issued' && balanceDue > 0) {
	cancel = true;
	showMessage = true;
	comment('Unable to issue the permit because there is a balance due $ ' + balanceDue);
}
