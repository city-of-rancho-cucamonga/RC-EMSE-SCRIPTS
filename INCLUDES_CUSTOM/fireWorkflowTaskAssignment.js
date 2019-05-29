function fireWorkflowTaskAssignment() {

	fireAsgnStaff = capDetail.getAsgnStaff();
	logDebug('assign staff: ' + fireAsgnStaff);
	wfTasksArray = new Array();
	wfTasksArray = loadTasks(capId);
	for (var thisTaskName in wfTasksArray)
		if (wfTasksArray[thisTaskName].active == 'Y' && !matches(thisTaskName.toString(), 'Operating Permit', 'Follow-Up Inspection', 'Correction Notice'))
			assignTask(thisTaskName, fireAsgnStaff);

}
