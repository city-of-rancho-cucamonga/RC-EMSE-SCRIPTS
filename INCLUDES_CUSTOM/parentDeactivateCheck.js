function parentDeactivateCheck(pTask) {
	prResult = aa.workflow.getProcessRelationByPK(capId, pTask.getStepNumber(), pTask.getProcessID(), "ADMIN");
	if (prResult.getSuccess()) {
		var foundActiveSub = false;
		processRelation = prResult.getOutput();
		childProcessID = processRelation.getProcessID();
		childProcessCode = processRelation.getProcessCode();
		subResult = aa.workflow.getTasks(capId, childProcessID);
		if (subResult.getSuccess()) {
			subTaskArray = subResult.getOutput();
			for (xx in subTaskArray) {
				subTask = subTaskArray[xx];
				if (subTask.getActiveFlag().equals("Y")) {
					foundActiveSub = true;

				}
			}
		} else {
			logDebug("Error getting tasks : " + subResult.getErrorMessage());
			foundActiveSub = true; // don't mess with it
		}
	} else {
		logDebug("Error getting process relation : " + prResult.getErrorMessage());
	}

	if (!foundActiveSub) {
		// deactivate the current task
		adResult = aa.workflow.adjustTask(capId, pTask.getStepNumber(), pTask.getProcessID(), "N", pTask.getCompleteFlag(), pTask.getAssignmentDate(), pTask.getDueDate());
		if (adResult.getSuccess())
			logDebug("Closing Workflow Task " + pTask.getTaskDescription());
		else
			logDebug("Error closing task : " + adResult.getErrorMessage());
	}
}
