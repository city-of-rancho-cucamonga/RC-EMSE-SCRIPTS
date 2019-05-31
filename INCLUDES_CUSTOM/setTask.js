function setTask(wfstr, isOpen, isComplete) // optional process name isOpen, isComplete take 'Y' or 'N'
{
	var useProcess = false;
	var processName = "";
	if (arguments.length > 3) {
		if (arguments[3] != "") {
			processName = arguments[3]; // subprocess
			useProcess = true;
		}
	}
	var itemCap = capId;
	if (arguments.length == 5)
		itemCap = arguments[4]; // use cap ID specified in args

	var workflowResult = aa.workflow.getTasks(itemCap);
	if (workflowResult.getSuccess())
		var wfObj = workflowResult.getOutput();
	else {
		logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage());
		return false;
	}

	for (i in wfObj) {
		var fTask = wfObj[i];
		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) && (!useProcess || fTask.getProcessCode().equals(processName))) {
			var stepnumber = fTask.getStepNumber();
			var processID = fTask.getProcessID();
			var completeFlag = fTask.getCompleteFlag();

			if (useProcess)
				aa.workflow.adjustTask(itemCap, stepnumber, processID, isOpen, isComplete, null, null)else
					aa.workflow.adjustTask(itemCap, stepnumber, isOpen, isComplete, null, null)

					logDebug("set Workflow Task: " + wfstr);
		}
	}
}
