
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && balanceDue > 0 && appTypeArray[2] != 'Sign Permit' && appTypeArray[3] != 'Permanent') {
	cancel = true;
	showMessage = true;
	comment('Unable to issue permit because there is a balance due of $' + balanceDue);
}

if (wfTask == 'Review Consolidation' && matches(wfStatus, 'Complete', 'Approved') && balanceDue > 0 && appTypeArray[2] != 'Sign Permit' && appTypeArray[3] != 'Permanent') {
	cancel = true;
	showMessage = true;
	comment('Unable to approve the review process because there is a balance due of $' + balanceDue);
}
