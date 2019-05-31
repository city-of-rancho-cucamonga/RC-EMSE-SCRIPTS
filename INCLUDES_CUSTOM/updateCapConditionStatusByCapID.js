function updateCapConditionStatusByCapID(pType, pDesc, pStatus, pStatusType, vCapID) {
	// updates a condition with the pType and pDesc
	// to pStatus, returns true if updates, false if not
	// will not update if status is already pStatus
	// all parameters are required except for pType
	if (pType == null)
		var condResult = aa.capCondition.getCapConditions(vCapID);
	else
		var condResult = aa.capCondition.getCapConditions(vCapID, pType);
	if (condResult.getSuccess())
		var capConds = condResult.getOutput();
	else {
		logMessage("**ERROR: getting cap conditions: " + condResult.getErrorMessage());
		logDebug("**ERROR: getting cap conditions: " + condResult.getErrorMessage());
		return false;
	}
	for (cc in capConds) {
		var thisCond = capConds[cc];
		var cStatus = thisCond.getConditionStatus();
		var cDesc = thisCond.getConditionDescription();
		var cImpact = thisCond.getImpactCode();
		logDebug("Condition: " + cDesc + " " + cStatus + " " + cImpact);

		if (cDesc.toUpperCase() == pDesc.toUpperCase()) {
			if (!pStatus.toUpperCase().equals(cStatus.toUpperCase())) {
				thisCond.setConditionStatus(pStatus);
				thisCond.setConditionStatusType(pStatusType);
				aa.capCondition.editCapCondition(thisCond);
				logDebug("Condition Updated: " + cDesc + " " + pStatus + " " + pStatusType);

				return true;
				// condition has been found and updated
			} else {
				logDebug("ERROR: condition " + cDesc + " found but already in the status of " + cStatus);
				return false;
				// condition found but already in the status of pStatus
			}
		}
	}
	logDebug("ERROR: no matching condition found for " + cDesc);
	return false;
}
