
// DISABLED: WTUA:Enforcement/Code Violation/*/*:10
// var enfAsgnStaff = capDetail.getAsgnStaff();
// DISABLED: WTUA:Enforcement/Code Violation/*/*:11
// var lastInspectionId;
// lastInspectionId = AInfo['Last Inspection ID'];
// DISABLED: WTUA:Enforcement/Code Violation/*/*:12
// if (wfTask == 'Notification' && lastInspectionId != '' || lastInspectionId != null) {
// 	updateInspCarryOverFlag(lastInspectionId);
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:15
// if (wfTask == 'Notification' && matches(wfStatus,'Chronology') && AInfo['COMPLAINT INFORMATION.Repeat Violator'] == null) {
// 	activateTask('Court Process');
// 	insertSubProcess('Court Process','ENF_COMPLAINT_COURT',false);
// 	scheduleInspection('Follow-up Inspection',1,enfAsgnStaff,null,null);
// 	setTask('Arraignment','N','N','ENF_COMPLAINT_COURT');
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:20
// if (wfTask == 'Complaint Received' && wfStatus == 'Received') {
// 	scheduleInspection('Initial Inspection',0,enfAsgnStaff,null,null);
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:25
// if (wfTask == 'Notification' && matches(wfStatus,'Courtesy Notice','NOV 1st','NOV 2nd','NOV Repeat','NOV Final','Citation','Compliance Order','Custom Letter','Door Hanger','Final Probation Violation Ltr','Office Conference Invitation','Verbal Notice','No Notice')) {
// 	scheduleInspectDateGroup('ENF_GEN','Follow-up Inspection',AInfo['Compliance Due Date'],enfAsgnStaff);
// 	//scheduleInspectDate('Follow-up Inspection',AInfo['Compliance Due Date'],enfAsgnStaff,null,null);
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:30
// if (matches(wfTask,'Arraignment','Pre Trial','Readiness Meeting','Trial') && matches(wfStatus,'Continuance','Plead Guilty','Plead No Contest','Plea Bargain','Plead Not Guilty')) {
// 	scheduleInspection('Monitor Inspection',1,enfAsgnStaff,null,null);
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:35
// if (wfTask == 'Court Process' && matches(wfStatus,'Court Appearance','Criminal Complaint','Office Conference')) {
// 	scheduleInspection('Monitor Inspection',1,enfAsgnStaff,null,null);
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:40
// if (wfTask == 'Notification' && wfStatus == 'Chronology') {
// 	scheduleInspection('Monitor Inspection',1);
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:45
// if (wfTask == 'Follow-up Inspection' && wfStatus == 'Receivership') {
// 	addAdHocTask('WFADHOC_PROCESS','Receivership','Receivership',enfAsgnStaff);
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:50
// if (wfTask == 'Receivership' && wfStatus == 'Receiver Appointed') {
// 	closeTask('Case Closed','Closed','','');
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:55
// if (wfTask == 'Follow-up Inspection' && wfStatus == 'Citation Appealed') {
// 	setTask('Citation Appeal','Y','N','ENF_COMPLAINT');
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:60
// if (wfTask == 'Court Process' && wfStatus == 'Criminal Complaint') {
// 	setTask('Arraignment','Y','N','ENF_COMPLAINT_COURT');
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:65
// if (wfTask == 'Citation Appeal' && wfStatus == 'Decision Rendered') {
// 	setTask('Appeal to Superior Court','Y','N','ENF_COMPLAINT_CITATION');
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:70
// if (wfTask == 'Case Closed' && wfStatus == 'Closed') {
// 	wfTArray = new Array();
// 	wfTArray = loadTasks(capId);
// 	for (x in wfTArray) if (wfTArray[x].active == 'Y') setTask(x,'N','N',wfTArray[x].process);
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:75
// if (wfTask == 'CE Extension' && wfStatus == 'Granted' && isScheduled('Follow-up Inspection') && AInfo['Extension Date'] != null && AInfo['Extension Date'] != '') {
// 	existingInsp = getScheduledInspId('Follow-up Inspection');
//	} else {
// 	existingInsp = null;
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:80
// if (existingInsp && existingInsp != null) {
// 	aa.inspection.reschedule(capId, existingInsp, null, aa.date.parseDate(AInfo['Extension Date']), '', 'rescheduled by script');
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:85
// if (wfTask=='Court Process Closed' && wfStatus == 'Probation' && AInfo['Probation Expiration'] != null) {
// 	editAppSpecific('COMPLAINT INFORMATION.Repeat Violator', 'YES');
// 	activateTask('Follow-up Inspection');
// 	scheduleInspectDate('Follow-up Inspection', dateAdd(AInfo['Probation Expiration'],-60),enfAsgnStaff,'AM','Monitor Inspection');
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:90
// if (wfTask == 'Notification' && matches(wfStatus,'Chronology') && AInfo['COMPLAINT INFORMATION.Repeat Violator'] != null) {
// 	addTask('Court Process', 'Vickers Hearing','P');
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:95
// br_nch('EMSE:Enforcement:WorkflowTaskAssignment');
// DISABLED: WTUA:Enforcement/Code Violation/*/*:98-Civica
// if (wfTask=='Complaint Received' && matches(wfStatus,'Received','Duplicate Case')) {
// 	emailContact('Concern Submitted to Community Improvement','<p>Your concern has been received by our office and a staff member has been assigned to look into your concern. Please be advised that all Community Improvement matters are confidential. Staff can only advise whether or not a case is currently being investigated.  Should you wish to provide us with additional information related to your concern, please contact us at CommunityImprovement@cityofrc.us or at (909) 477-2712.</p>Thank you, <br /><br />City of Rancho Cucamonga Community Improvement Department','Reporting Party');
// 	}

// DISABLED: WTUA:Enforcement/Code Violation/*/*:99-Civica
// civicaURL = 'https://accela.cityofrc.us/CRMInterface/CallCRMService.asmx';
// sendClosureNotification(civicaURL);
