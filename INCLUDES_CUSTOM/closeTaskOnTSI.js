function closeTaskOnTSI(tName, tStatus) {
	// tName is the name of the task to find the TSI fields on
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
		taskTSI = getTaskSpecific(tName, taskDesc);
		//if (taskDesc == "MEP Review") taskTSI = getTaskSpecific("Application Submittal", "Health Review");
		//aa.print("Task TSI " + taskDesc + "=" + taskTSI);

		if (taskTSI == false)
			continue; // didn't find a TSI value
		if ((taskTSI == null) || (taskTSI != "CHECKED")) {
			// close the task
			adResult = aa.workflow.handleDisposition(capId, thisTask.getStepNumber(), thisTask.getProcessID(), tStatus, dispositionDate, "", "Closed via Script", systemUserObj, "Y");

			if (adResult.getSuccess())
				logDebug("Closing Workflow Task " + taskDesc + ", step= " + thisTask.getStepNumber);
			else
				logDebug("Error closing task : " + adResult.getErrorMessage());
		}

	}
}
