function inspUpdateAllCarryOverFlags() {
	var inspResults = aa.inspection.getInspections(capId);
	if (inspResults.getSuccess()) {
		var inspAll = inspResults.getOutput();
		var inspectionId;
		for (ii in inspAll) {
			inspectionId = inspAll[ii].getIdNumber(); // Inspection identifier
			updateInspCarryOverFlag(inspectionId);
		}
	} else
		logDebug("**ERROR: getting inspections: " + inspResults.getErrorMessage());

	return true;
}
