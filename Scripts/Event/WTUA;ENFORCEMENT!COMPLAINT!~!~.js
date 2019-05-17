
// DISABLED: WTUA:Enforcement/Complaint/*/*:01
// if (wfTask == 'Follow-up Inspection' && wfStatus == 'Refer to Court Process' && AInfo['Repeat Violator'] != null) {
// 	insertSubProcess('Court Process','ENF_COMPLAINT_VICKHEAR',false);
// 	}

// DISABLED: WTUA:Enforcement/Complaint/*/*:02
// if (wfTask == 'Follow-up Inspection' && wfStatus == 'Refer to Court Process' && AInfo['Repeat Violator'] == null) {
// 	insertSubProcess('Court Process','ENF_COMPLAINT_COURT',false);
// 	}

// DISABLED: WTUA:Enforcement/Complaint/*/*:03
// if (wfTask == 'Complaint Received' && wfStatus == 'Completed') {
// 	scheduleInspection('Initial Inspection',0,currentUserID,null,null);
// 	}

// DISABLED: WTUA:Enforcement/Complaint/*/*:04
// if (wfTask == 'Notification' && matches(wfStatus,'NOV 1st','NOV 2nd','NOV Final')) {
// 	scheduleInspectDate('Follow-up Inspection',AInfo['Compliance Due Date']);
// 	}

