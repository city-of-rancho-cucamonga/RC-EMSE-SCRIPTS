if (!matches(inspType, 'Pre-Inspection')) {
	cancel = true;
	showMessage = true;
	comment('Final inspection cannot be scheduled after Transportaion Fees are paid.');
}