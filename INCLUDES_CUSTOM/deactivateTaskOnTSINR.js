function deactivateTaskOnTSINR(tName) {
	// tName is the name of the task to find the TSI fields on
	var workflowResult = aa.workflow.getTasks(capId);
	if (workflowResult.getSuccess())
		var wfObj = workflowResult.getOutput();
	else {
		logMessage("**ERROR: Failed to get workflow object: " + workflowResult.getErrorMessage());
		return false;
	}
	var dispositionDate = aa.date.getCurrentDate();
	var fTask;
	var wftask;
	for (i in wfObj) {
		fTask = wfObj[i];
		wftask = fTask.getTaskDescription();
		taskTSI = getTaskSpecific(tName, wftask);
		if (taskTSI == false)
			continue; // didn't find a TSI value
		if ((taskTSI == null) || (taskTSI != "CHECKED")) {
			// close the task
			adResult = aa.workflow.handleDisposition(capId, fTask.getStepNumber(), "Not Required", dispositionDate, "", "Closed via Script", systemUserObj, "Y");

			if (adResult.getSuccess())
				logDebug("Closing Workflow Task " + fTask.getTaskDescription());
			else
				logDebug("Error closing task : " + adResult.getErrorMessage());
		}

	}
}
