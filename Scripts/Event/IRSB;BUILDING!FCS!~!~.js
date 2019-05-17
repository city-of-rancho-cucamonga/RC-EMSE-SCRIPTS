
if (inspType == 'Fire Final' && inspResult == 'Approved' && balanceDue > 0) {
	showMessage = true;
	cancel = true;
	logMessage('Unable to finalize the permit because there is a balance due of $ ' + balanceDue);
	}

// DISABLED: IRSB:Building/FCS/*/*:02
// if (capStatus = 'As-Built Required') {
// 	cancel = true;
// 	showMessage = true;
// 	logMessage('Cannot result inspections until As-Builts are Approved');
// 	}

