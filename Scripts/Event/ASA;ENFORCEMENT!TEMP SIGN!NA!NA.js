
scheduleInspection('Initial Inspection', 0, currentUserID);
if (AInfo['Business Name'] != '') {
	var asiFieldValue = getAppSpecific('GENERAL INFORMATION.Business Name');
	editAppName(asiFieldValue);
}
