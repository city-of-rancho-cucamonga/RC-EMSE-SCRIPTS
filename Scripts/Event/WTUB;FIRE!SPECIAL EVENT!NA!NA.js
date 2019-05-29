
if (wfTask == 'Fire District Review' && matches(wfStatus, 'Approved', 'Approved w/Comments') && balanceDue > 0) {
	cancel = true;
	showMessage = true;
	logMessage('Unable to approve  the review because there is a balance due of $ ' + balanceDue);
}
