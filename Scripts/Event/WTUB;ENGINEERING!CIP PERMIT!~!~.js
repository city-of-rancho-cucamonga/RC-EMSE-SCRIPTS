
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && capHasExpiredProfRC('CONTRACTOR')) {
	cancel = true;
	showMessage = true;
	comment('Action denied due to expired licensed professional');
}

if (wfTask == 'Permit Extension' && wfStatus == 'Approved' && capHasExpiredProfRC('CONTRACTOR')) {
	cancel = true;
	showMessage = true;
	comment('Action denied due to expired licensed professional');
}
