
var childRecStatus;
childIdCEQA = 'undefined';
childIdCEQA = childGetByCapType('Planning/Application/Environmental/CEQA');
if (!matches(childIdCEQA, false, undefined)) {
	childRecStatus = getRecordStatus(childIdCEQA);
	//comment('What is childRecStatus = ' + childRecStatus);
}

if (wfTask == 'Plan Spec and Estimate Finalization' && wfStatus == 'Signed' && matches(childRecStatus, 'Pending', 'In Review', 'Incomplete', 'Draft Complete', 'Open for Comments')) {
	showMessage = true;
	cancel = true;
	logMessage('Cannot update worklflow because the CEQA Review is not completed');
}
