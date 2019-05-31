function reactivateCorrections() {
	var wfArray = new Array();
	var workflowResult = aa.workflow.getTasks(capId);
	if (workflowResult.getSuccess())
		var wfArray = workflowResult.getOutput();
	else {
		logMessage("**ERROR: Failed to get workflow object: " + workflowResult.getErrorMessage());
		return false;
	}
	var dispositionDate = aa.date.getCurrentDate();
	var tStatus = tStatus;
	var fTask;
	var wftask;
	for (i in wfArray) {
		thisTask = wfArray[i];
		taskDesc = thisTask.getTaskDescription();
		if (!isTaskStatus(taskDesc, "Corrections Required")) {
			deactivateTask(taskDesc);
		} else
			activateTask(taskDesc);
	}

}
