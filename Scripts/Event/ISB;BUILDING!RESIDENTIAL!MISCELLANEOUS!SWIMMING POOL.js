if (!publicUser && !matches(capStatus, 'Pre-Inspection', 'Issued', 'Inspections', 'Inspection Phase') && !(matches(appTypeArray[1], 'Grading', 'Code Violation') || matches(appTypeArray[2], 'Septic'))) {
	cancel = true;
	showMessage = true;
	comment('The inspection cannot be scheduled because the permit does not have a record status which allows inspection scheduling');
}



if (!matches(inspType, 'Underground') && capStatus == "Pre-Inspection") {
	cancel = true;
	showMessage = true;
	comment('Final inspection cannot be scheduled after Transportaion Fees are paid.');
}



