
if (inspType == 'Final Inspection' && balanceDue > 0) {
	cancel = true;
	showMessage = true;
	logMessage('Unable to schedule inspection because there is a balance due of $ ' + balanceDue);
}
