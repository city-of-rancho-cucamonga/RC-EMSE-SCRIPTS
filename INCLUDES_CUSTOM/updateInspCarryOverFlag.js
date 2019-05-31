function updateInspCarryOverFlag(pInspNum) {
	var inspResultObj = aa.inspection.getInspection(capId, pInspNum);
	if (inspResultObj.getSuccess()) {
		var myInspScriptModel = inspResultObj.getOutput();
		var myInsp = myInspScriptModel.getInspection();
		var inspActivity = myInsp.getActivity();
		inspActivity.setCarryoverFlag("F");
		myInsp.setActivity(inspActivity);

		var inspUpdResult = aa.inspection.updateInspectionForSuperVisor(myInsp);

		if (inspUpdResult.getSuccess()) {
			logDebug("Successfully update inspection carry over flag.")
		} else {
			logDebug("EMSE ERROR: Carry over flag update failed. " + inspUpdResult.getErrorMessage())
		}
		//exploreObject(inspActivity);

	} else {
		logDebug("EMSE ERROR: Get inspection failed - " + inspResultObj.getErrorMessage())
	}
}
