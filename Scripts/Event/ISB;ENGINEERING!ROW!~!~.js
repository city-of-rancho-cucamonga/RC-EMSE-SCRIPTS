
if (!(matches(capStatus, 'Issued', 'CC Approved', 'Final Inspection Complete', 'Pending Acceptance', 'Pending Maint. Acceptance', 'Maintenance Bond Released', 'Corrections Needed')) || balanceDue > 0) {
	cancel = true;
	showMessage = true;
	comment('You cannot schedule inspections until the Permit is Issued or Fees have been paid');
}

if (capHasExpiredProfRC('CONTRACTOR')) {
	cancel = true;
	showMessage = true;
	logMessage("Unable to schedule inspection at this time.  The contractor's licensing or insurance information has expired in our system and needs to be updated.  Please contact the Engineering Department at (909) 477-2740 ext. 4077 to update the expired information.");
}
