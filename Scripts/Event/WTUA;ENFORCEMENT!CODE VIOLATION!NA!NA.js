
var enfAsgnStaff = capDetail.getAsgnStaff();
var lastInspectionId;
lastInspectionId = AInfo['Last Inspection ID'];
if (wfTask == 'Notification' && lastInspectionId != '' || lastInspectionId != null) {
	updateInspCarryOverFlag(lastInspectionId);
	}

// DISABLED: WTUA:Enforcement/Code Violation/NA/NA:15 Activate Criminal Filing
// if (wfTask == 'Notification' && matches(wfStatus,'Refer to Prosecutor') && AInfo['COMPLAINT INFORMATION.Repeat Violator'] == null) {
// 	addAdHocTask('WFADHOC_PROCESS','Criminal Filing','',enfAsgnStaff);
// 	scheduleInspection('Follow-up Inspection',1,enfAsgnStaff,null,null);
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/NA/NA:18 Refer to Fire
// if (wfTask == 'Initial Inspection' && wfStatus == 'Referred to Fire') {
// 	var newCapId = createCap('Fire/District/Field Inspection Report/NA','Created from Community Improvement referral: ' + capIDString);
// 	updateAppStatus('Pending','Created from Community Improvement referral' + capIDString);
// 	copyAddresses(capId,newCapId);
// 	copyParcels(capId,newCapId);
// 	copyOwner(capId,newCapId);
// 	copyContacts(capId,newCapId);
// 	aa.cap.copyCapWorkDesInfo(capId,newCapId);
// 	copyAppSpecific(capId,newCapId);
// 	holdId = capId;
// 	capId = newCapId;
// 	copyParcelGisObjects ();
// 	capId = holdId;
// 	closeTask('Case Closed','Close','Updated by Refer to Fire script','');
// 	}

if (wfTask == 'Initial Inspection' && wfStatus == 'Referred to Building') {
	var bldCodeId = createCap('Building/Code Violation/NA/NA','Created from: ' + capIDString);
	updateAppStatus('Pending','Updated by script',bldCodeId);
	copyAddresses(capId,bldCodeId);
	copyParcels(capId,bldCodeId);
	copyOwner(capId,bldCodeId);
	copyContacts(capId,bldCodeId);
	aa.cap.copyCapWorkDesInfo(capId,bldCodeId);
	copyAppSpecific(bldCodeId);
	holdId = capId;
	capId = bldCodeId;
	copyParcelGisObjects();
	capId = holdId;
	closeTask('Case Closed','Close','Updated by Refer To Building script','');
	}

if (wfTask == 'Case Initiated' && wfStatus == 'Assigned') {
	scheduleInspection('Initial Inspection',0,enfAsgnStaff,null,null);
	}

if (wfTask == 'Case Initiated' && matches(wfStatus,'Out of jurisdiction','RV Grandfathered')) {
	closeTask('Case Closed','Close','','');
	}

if (wfTask == 'Notification' && matches(wfStatus,'NOV 1st','NOV Final','NOV Repeat','Citation','Compliance Order','Custom Letter','Door Hanger','Probation Violation Final','Probation Violation','Verbal','No Notice','Notice to Abate','Refer to Prosecutor')) {
	scheduleInspectDateGroup('ENF_GEN','Follow-up Inspection',AInfo['Compliance Due Date'],enfAsgnStaff);
	//scheduleInspectDate('Follow-up Inspection',AInfo['Compliance Due Date'],enfAsgnStaff,null,null);
	}

if (wfTask == 'Notification' && wfStatus == 'Refer to Prosecutor') {
	addAdHocTask('WFADHOC_PROCESS','Criminal Filing','',enfAsgnStaff);
	}

if (wfTask == 'Criminal Filing' && matches(wfStatus,'Court Action','Office Conference')) {
	scheduleInspection('Follow-up Inspection',1,enfAsgnStaff,null,null);
	}

if (wfTask == 'Follow-up Inspection' && wfStatus == 'Hearing Requested') {
	addAdHocTask('WFADHOC_PROCESS','Administrative Hearing','',enfAsgnStaff);
	}

if (wfTask == 'Follow-up Inspection' && matches(wfStatus,'','Hearing Requested')) {
	scheduleInspection('Follow-up Inspection',1,enfAsgnStaff,null,null);
	}

if (wfTask == 'Follow-up Inspection' && wfStatus == 'Receivership') {
	addAdHocTask('WFADHOC_PROCESS','Receivership','',enfAsgnStaff);
	}

if (wfTask == 'Case Closed' && wfStatus == 'Closed') {
	wfTArray = new Array();
	wfTArray = loadTasks(capId);
	for (x in wfTArray) if (wfTArray[x].active == 'Y') setTask(x,'N','N',wfTArray[x].process);
	}

if (wfTask == 'CE Extension' && wfStatus == 'Granted' && isScheduled('Follow-up Inspection') && AInfo['Extension Date'] != null && AInfo['Extension Date'] != '') {
	existingInsp = getScheduledInspId('Follow-up Inspection');
	} else {
	existingInsp = null;
	}

if (existingInsp && existingInsp != null) {
	aa.inspection.reschedule(capId, existingInsp, null, aa.date.parseDate(AInfo['Extension Date']), '', 'rescheduled by script');
	}

if (wfTask=='Criminal Filing' && wfStatus == 'Resolved' && AInfo['Probation Expiration'] != null) {
	editAppSpecific('COMPLAINT INFORMATION.Repeat Violator', 'YES');
	activateTask('Follow-up Inspection');
	scheduleInspectDate('Follow-up Inspection', dateAdd(AInfo['Probation Expiration'],-60),enfAsgnStaff,'AM','Monitor Inspection');
	}


//replaced branch(EMSE:Enforcement:WorkflowTaskAssignment)
enfWorkflowTaskAssignment();
if (wfTask=='Case Initiated' && matches(wfStatus,'Assigned','Duplicate Case')) {
	emailContact('Concern Submitted to Community Improvement','<p>Your concern has been received by our office and a staff member has been assigned to look into your concern. Please be advised that all Community Improvement matters are confidential. Staff can only advise whether or not a case is currently being investigated.  Should you wish to provide us with additional information related to your concern, please contact us at CommunityImprovement@cityofrc.us or at (909) 477-2712.</p>Thank you, <br /><br />City of Rancho Cucamonga Community Improvement Department','Reporting Party');
	}

civicaURL = 'https://accela.cityofrc.us/CRMInterface/CallCRMService.asmx';
sendClosureNotification(civicaURL);

