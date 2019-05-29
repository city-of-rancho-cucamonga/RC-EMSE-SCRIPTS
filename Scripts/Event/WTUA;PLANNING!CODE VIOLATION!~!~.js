
if (wfTask == 'Notification' && matches(wfStatus, 'Chronology') && AInfo['COMPLAINT INFORMATION.Repeat Violator'] == null) {
	activateTask('Court Process');
	insertSubProcess('Court Process', 'ENF_COMPLAINT_COURT', false);
	scheduleInspection('Follow-up Inspection', 1);
	setTask('Arraignment', 'N', 'N', 'ENF_COMPLAINT_COURT');
}

if (wfTask == 'Complaint Received' && wfStatus == 'Received') {
	scheduleInspection('Initial Inspection', 0, currentUserID, null, null);
}

if (wfTask == 'Notification' && matches(wfStatus, 'NOV 1st', 'NOV 2nd', 'NOV Repeat', 'NOV Final', 'Citation', 'Compliance Order', 'Custom Letter', 'Door Hanger', 'Final Probation Violation Ltr', 'Office Conference Invitation', 'Verbal Notice')) {
	scheduleInspectDate('Follow-up Inspection', AInfo['Compliance Due Date']);
	//scheduleInspectDate('Follow-up Inspection',AInfo['Compliance Due Date']);
}

if (matches(wfTask, 'Arraignment', 'Pre Trial', 'Readiness Meeting', 'Trial') && matches(wfStatus, 'Continuance', 'Plead Guilty', 'Plead No Contest', 'Plea Bargain', 'Plead Not Guilty')) {
	scheduleInspection('Monitor Inspection', 1);
}

if (wfTask == 'Court Process' && matches(wfStatus, 'Court Appearance', 'Criminal Complaint', 'Office Conference')) {
	scheduleInspection('Monitor Inspection', 1);
}

// DISABLED: WTUA:Planning/Code Violation/*/*:6
// if (wfTask == 'Notification' && wfStatus == 'Chronology') {
// 	scheduleInspection('Monitor Inspection',1);
// 	}

if (wfTask == 'Follow-up Inspection' && wfStatus == 'Receivership') {
	addAdHocTask('WFADHOC_PROCESS', 'Receivership', 'Receivership', currentUserID);
}

if (wfTask == 'Receivership' && wfStatus == 'Receiver Appointed') {
	closeTask('Case Closed', 'Closed', '', '');
}

if (wfTask == 'Follow-up Inspection' && wfStatus == 'Citation Appealed') {
	setTask('Citation Appeal', 'Y', 'N', 'ENF_COMPLAINT');
}

if (wfTask == 'Court Process' && wfStatus == 'Criminal Complaint') {
	setTask('Arraignment', 'Y', 'N', 'ENF_COMPLAINT_COURT');
}

if (wfTask == 'Citation Appeal' && wfStatus == 'Decision Rendered') {
	setTask('Appeal to Superior Court', 'Y', 'N', 'ENF_COMPLAINT_CITATION');
}

if (wfTask == 'Case Closed' && wfStatus == 'Closed') {
	wfTArray = new Array();
	wfTArray = loadTasks(capId);
	for (x in wfTArray)
		if (wfTArray[x].active == 'Y')
			setTask(x, 'N', 'N', wfTArray[x].process);
}

if (wfTask == 'CE Extension' && wfStatus == 'Completed' && isScheduled('Follow-up Inspection') && AInfo['Extension Date'] != null && AInfo['Extension Date'] != '') {
	existingInsp = getScheduledInspId('Follow-up Inspection');
} else {
	existingInsp = null;
}

if (existingInsp && existingInsp != null) {
	aa.inspection.reschedule(capId, existingInsp, null, aa.date.parseDate(AInfo['Extension Date']), '', 'rescheduled by script');
}

if (wfTask == 'Court Process Closed' && wfStatus == 'Probation' && AInfo['Probation Expires'] != null) {
	editAppSpecific('COMPLAINT INFORMATION.Repeat Violator', 'YES');
	activateTask('Follow-up Inspection');
	scheduleInspectDate('Follow-up Inspection', dateAdd(AInfo['Probation Expires'], -60), currentUserID, 'AM', 'Probation Expiration Follow-up');
}

if (wfTask == 'Notification' && matches(wfStatus, 'Chronology') && AInfo['COMPLAINT INFORMATION.Repeat Violator'] != null) {
	addTask('Court Process', 'Vickers Hearing', 'P');
}
