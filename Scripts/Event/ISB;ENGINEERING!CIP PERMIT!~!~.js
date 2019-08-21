
if (appHasCondition('Eng Permit', 'Applied', 'Stop Notice', null)) {
	cancel = true;
	showMessage = true;
	comment('You cannot schedule inspections since there is a Stop Work Notice associated to the permit');
}

if (capHasExpiredProfRC('CONTRACTOR')) {
	cancel = true;
	showMessage = true;
	comment('Unable to schedule inspection because contractor license information has expired');
}
