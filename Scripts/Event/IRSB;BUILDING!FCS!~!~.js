
if (inspType == 'Fire Final' && inspResult == 'Approved' && balanceDue > 0) {
	showMessage = true;
	cancel = true;
	comment('Unable to finalize the permit because there is a balance due of $ ' + balanceDue);
}

// DISABLED: IRSB:Building/FCS/*/*:02
// if (capStatus = 'As-Built Required') {
// 	cancel = true;
// 	showMessage = true;
// 	comment('Cannot result inspections until As-Builts are Approved');
// 	}
