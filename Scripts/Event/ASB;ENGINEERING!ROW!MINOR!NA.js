
if (currentUserID.indexOf('PUBLICUSER') != 0) {
	loadASITablesBefore();
}

if (currentUserID.indexOf('PUBLICUSER') != 0 && typeof(WORKITEMS) != 'object') {
	cancel = true;
	showMessage = true;
	comment('You must have at least one row in the Work Items ASI Table section');
}
