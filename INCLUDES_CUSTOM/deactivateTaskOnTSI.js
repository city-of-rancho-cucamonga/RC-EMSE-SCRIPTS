function deactivateTaskOnTSI(tName) {
	// tName is the name of the task to find the TSI fields on
	var workflowResult = aa.workflow.getTasks(capId);
	if (workflowResult.getSuccess())
		var wfObj = workflowResult.getOutput();
	else {
		logMessage("**ERROR: Failed to get workflow object: " + workflowResult.getErrorMessage());
		return false;
	}

	var fTask;
	var wftask;
	for (i in wfObj) {
		fTask = wfObj[i];
		wftask = fTask.getTaskDescription();
		taskTSI = getTaskSpecific(tName, wftask);
		if (taskTSI == false)
			continue; // didn't find a TSI value
		if ((taskTSI == null) || (taskTSI != "CHECKED")) {
			// deactivate the task
			adResult = aa.workflow.adjustTask(capId, fTask.getStepNumber(), fTask.getProcessID(), "N", fTask.getCompleteFlag(), fTask.getAssignmentDate(), fTask.getDueDate());
			if (adResult.getSuccess())
				logDebug("Closing Workflow Task " + fTask.getTaskDescription());
			else
				logDebug("Error closing task : " + adResult.getErrorMessage());
		}
		// if this task is a subtask (it is by design), check the parent
		pTask = getParentTask(fTask);
		if (pTask != null) {
			parentDeactivateCheck(pTask);
		}
	}
}
