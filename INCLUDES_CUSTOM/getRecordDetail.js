function getRecordDetail(capId) // option CapId
{
	var itemCap = capId
		var cArray = new Array();
	if (arguments.length > 1)
		itemCap = arguments[1]; // use cap ID specified in args
	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess()) {
		logDebug("**ERROR: No cap detail script object : " + cdScriptObjResult.getErrorMessage());
		return false;
	}
	var cdScriptObj = cdScriptObjResult.getOutput();
	if (!cdScriptObj) {
		logDebug("**ERROR: No cap detail script object");
		return false;
	}
	cd = cdScriptObj.getCapDetailModel();
	var colsedby = cd.getClosedBy();
	if (colsedby) {
		var cld = aa.person.getUser(colsedby).getOutput().getFullName();
	} else {
		var cld = ""
	}
	cArray['createby'] = cd.getCreateBy();
	cArray['priority'] = cd.getPriority();
	cArray['closedby'] = cld;
	return cArray;
}
