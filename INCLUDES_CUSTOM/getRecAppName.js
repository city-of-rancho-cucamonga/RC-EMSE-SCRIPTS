function getRecAppName(itemCap) {
	var cdScriptObjResult = aa.cap.getCap(itemCap);
	if (!cdScriptObjResult.getSuccess()) {
		logDebug("**ERROR: error getting cap : " + cdScriptObjResult.getErrorMessage());
		return false;
	}

	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj) {
		logDebug("**ERROR: No cap detail script object");
		return false;
	}

	cd = cdScriptObj.getCapModel();

	var sReturn = cd.getSpecialText();

	if (sReturn != null)
		return sReturn;
	else
		return "";
}
