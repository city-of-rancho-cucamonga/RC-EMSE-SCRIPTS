
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
	bldUpdateGisObjects();
}

if (wfTask == 'Complaint Received' && wfStatus == 'Completed') {
	var nxtinpworkday = nextWorkDay(dateAdd(null, 1));
	scheduleInspectDate('Initial Inspection', nxtinpworkday, null, null);
	var inspId = getScheduledInspId('Initial Inspection');
	var bldInspDist = AInfo['GIS INFORMATION.Inspection Area'];
	var assignInsp = '';
	assignInsp = lookup('EMSE:BLDINSP:LOOKUP', bldInspDist);
	assignInspection(inspId, assignInsp);
	assignTask('Complaint Received', assignInsp);
	assignTask('Initial Inspection', assignInsp);
}

if (wfTask == 'Notification' && matches(wfStatus, 'Correction Notice', '1st Letter', '2nd Letter')) {
	scheduleInspectDate('Follow-up Inspection', AInfo['Compliance Due Date']);
}

if (wfTask == 'CE Extension' && wfStatus == 'Completed' && isScheduled('Follow-up Inspection') && AInfo['Extension Date'] != null && AInfo['Extension Date'] != '') {
	existingInsp = getScheduledInspId('Follow-up Inspection');
} else {
	existingInsp = null;
}

if (existingInsp && existingInsp != null) {
	aa.inspection.reschedule(capId, existingInsp, null, aa.date.parseDate(AInfo['Extension Date']), '', 'rescheduled by script');
}

if (wfTask == 'Follow-up Inspection' && wfStatus == 'Referred to Code Enforcement') {
	childId = createChild('Enforcement', 'Code Violation', 'NA', 'NA');
	copyOwner(capId, childId);
	updateAppStatus('Pending', 'Created from' + capIDString, childId);
	aa.cap.copyCapWorkDesInfo(capId, childId);
	copyAppSpecific(childId);
	holdId = capId;
	capId = childId;
	copyParcelGisObjects();
	capId = holdId;
}

civicaURL = 'https://accela.cityofrc.us/CRMInterface/CallCRMService.asmx';
sendClosureNotification(civicaURL);
if (wfTask == 'Case Closed' && wfStatus == 'Closed' && AInfo['COMPLAINT INFORMATION.Source of Complaint'] == 'RCFD') {
	emailContact('A BLD you entered has been closed ' + capIDString, 'has been closed.');
}
