function getParentTask(childTask) {
	retValue = null;
	var parentTaskName = null;
	var parentProcessID = null;

	prResult = aa.workflow.getProcessRelationByCapID(capId, null);
	if (prResult.getSuccess()) {
		procRelArr = prResult.getOutput();
		for (yy in procRelArr) {
			thisRel = procRelArr[yy];
			parentTaskName = thisRel.getParentTaskName();
			parentProcessID = thisRel.getParentProcessID();
			if (thisRel.getProcessID() == childTask.getProcessID()) {
				break;
			}
		}
		pResult = aa.workflow.getTask(capId, parentTaskName);
		if (pResult.getSuccess())
			retValue = pResult.getOutput();
		else
			logDebug("Error getting parent task " + pResult.getErrorMessage());
	} else
		logDebug("Error getting process relation " + prResult.getErrorMessage());
	return retValue
}
