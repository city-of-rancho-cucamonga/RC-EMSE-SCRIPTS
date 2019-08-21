
if (wfTask == 'Inspections' && wfStatus == 'Final Inspection Complete' && balanceDue > 0) {
	cancel = true;
	comment('Cannot close out record with a balance due $ ' + balanceDue);
}
