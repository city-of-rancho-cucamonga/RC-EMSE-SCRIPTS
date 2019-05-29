
if (wfTask == 'Status' && matches(wfStatus, 'Send Renewal')) {
	childId = createChild('Fire', 'Alarm Services', 'NA', 'NA', capName);
	updateAppStatus('Renewal Sent', 'Created from' + capIDString, childId);
	aa.cap.copyCapWorkDesInfo(capId, childId);
	copyOwner(capId, childId);
	updateAppStatus('Closed', 'Updated by Script');
}
