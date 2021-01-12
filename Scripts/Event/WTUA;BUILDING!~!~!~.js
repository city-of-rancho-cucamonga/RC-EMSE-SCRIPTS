
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('KEY DATES.Permit Issued', wfDateMMDDYYYY);
	editAppSpecific('KEY DATES.Permit Expired', dateAdd(wfDateMMDDYYYY, 365));
}

if (wfTask == 'Bld Permit Extension' && wfStatus == 'Approved') {
	editAppSpecific('KEY DATES.Permit Expired', dateAdd(null, AInfo['Number of Days']));
}

if (wfTask == 'Bld Plan Review Extension' && wfStatus == 'Approved') {
	editAppSpecific('KEY DATES.Plan Check Expired', dateAdd(null, AInfo['Number of Days']));
}

if (wfTask == 'Application Submittal' && wfStatus == 'Submitted') {
	editAppSpecific('KEY DATES.Plan Check Submitted', wfDateMMDDYYYY);
	editAppSpecific('KEY DATES.Plan Check Expired', dateAdd(wfDateMMDDYYYY, 180));
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Final CO Issued') {
	closeTask('Closed', 'Finalized', 'Closed by Final CO Issued', '');
}

if (matches(wfStatus, 'Withdrawn', 'Expired', 'Void', 'Cancelled')) {
	wfTArray = new Array();
	wfTArray = loadTasks(capId);
	for (x in wfTArray)
		if (wfTArray[x].active == 'Y')
			setTask(x, 'N', 'N', wfTArray[x].process);
}

if (wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Resubmitted', 'Revisions')) {
	closeTaskOnTSI('Application Submittal', 'Not Required');
}

if (!appMatch('Building/Grading/*/*') && wfTask == 'Application Submittal' && matches(wfStatus, 'Resubmitted')) {
	reactivateCorrections();
}

// Backup copy-- see below
// if (wfTask == 'Application Submittal' && matches(wfStatus, 'Resubmitted', 'Revisions')) {
// 	editTaskDueDate('Engineering Review', dateAdd(null, 5, 'Y'));
// 	editTaskDueDate('Public Works Review', dateAdd(null, 5, 'Y'));
// 	editTaskDueDate('FCS Review', dateAdd(null, 5, 'Y'));
// 	editTaskDueDate('Planning Review', dateAdd(null, 5, 'Y'));
// 	editTaskDueDate('MEP Review', dateAdd(null, 5, 'Y'));
// 	editTaskDueDate('Building Review', dateAdd(null, 5, 'Y'));
// 	editTaskDueDate('Grading Review', dateAdd(null, 5, 'Y'));
// }

if (wfTask == 'Application Submittal' && matches(wfStatus, 'Resubmitted', 'Revisions')) {
	console.log(nextWorkDay());
	editTaskDueDate('Engineering Review', dateAdd(null, 5, 'Y'));
	editTaskDueDate('Public Works Review', dateAdd(null, 5, 'Y'));
	editTaskDueDate('FCS Review', dateAdd(null, 5, 'Y'));
	editTaskDueDate('Planning Review', dateAdd(null, 5, 'Y'));
	editTaskDueDate('MEP Review', dateAdd(null, 5, 'Y'));
	editTaskDueDate('Building Review', dateAdd(nextWorkDay, 5, 'Y'));
	editTaskDueDate('Grading Review', dateAdd(null, 5, 'Y'));
}

if (wfTask == 'Review Consolidation' && wfStatus == 'Revisions Approved') {
	closeTask('Permit Issuance', '', 'Closed via script', '');
	setTask('Inspections', 'Y', 'N');
}

// DISABLED: WTUA:Building/*/*/*:99  - notification to RCFD on approved FCS Reviews
// if (wfTask == 'FCS Review' && matches(wfStatus,'Approved','As Built Approved')) {
// 	priAddrRec = priAddressOnCap();
// 	email('sid.siphomsay@cityofrc.us,jennifer.quan@cityofrc.us','noreply@cityofrc.us','FCS Review has been APPROVED on a permit.','<b> </b>Record:<b> </b> ' + capIDString + '<br /><b> </b>Address:<b> </b> ' + priAddrRec + '<br /><b> </b>Work Description:<b> </b>' + capName + '.');
// 	}

// DISABLED: WTUA:Building/*/*/*:TEST AR
// if (wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Resubmitted', 'Revisions') && isTaskActive('FCS Review')) {
// 	priAddrRec = priAddressOnCap();
// 	email('Alicia.Reister@cityofrc.us','noreply@cityofrc.us','A permit has been submitted for FCS Review: ' + capIDString + '.','<b> </b>Record:<b> </b> ' + capIDString + '<br /><b> </b>Address:<b> </b> ' + priAddrRec + '<br /><b> </b>Work Description:<b> </b>' + capName + '.');
// 	}
