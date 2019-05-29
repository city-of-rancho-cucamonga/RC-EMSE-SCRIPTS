
if (inspType == 'Initial Inspection' && !matches(inspResult, 'Duplicate Case', 'Referred to Comm Improvement', 'Unfounded')) {
	var nxtinstype = '';
	if (inspResult == 'No Contact /Reschedule' || inspResult == 'Note')
		nxtinstype = 'Initial Inspection';
	else
		nxtinstype = 'Follow-up Inspection';
	var nxtinpnumberofday = 0;
	if (inspResult == 'Founded - 1 day')
		nxtinpnumberofday = 1;
	else if (inspResult == 'No Contact /Reschedule' || inspResult == 'Note' || inspResult == 'Founded - 3 days')
		nxtinpnumberofday = 3;
	else if (inspResult == 'Founded - 10 days')
		nxtinpnumberofday = 10;
	else
		nxtinpnumberofday = 30;
	var nxtinpworkday = nextWorkDay(dateAdd(null, nxtinpnumberofday));
	scheduleInspectDateGroup('BLD_COMPL', nxtinstype, nxtinpworkday, getLastInspector('Initial Inspection'));
}

if (inspType == 'Initial Inspection' && matches(inspResult, 'Founded - 1 day', 'Founded - 3 days', 'Founded - 10 days', 'Founded - 30 days')) {
	setTask('Initial Inspection', 'N', 'Y');
	setTask('Follow-up Inspection', 'Y', 'N');
	assignTask('Follow-up Inspection', getTaskAssignUser('Initial Inspection'));
}

if (inspType == 'Initial Inspection' && matches(inspResult, 'Unfounded', 'Duplicate Case', 'Referred to Comm Improvement')) {
	closeTask('Initial Inspection', inspResult, 'Updated by Inspection Result', 'Unfounded');
	closeTask('Notification', '', '', '');
	closeTask('Follow-up Inspection', '', '', '');
	updateTask('Case Closed', 'Closed', 'Updated via script', '');
	closeTask('Case Closed', 'Closed', '', '');
	updateAppStatus('Closed', 'Updated via script');
}

// DISABLED: IRSA:Building/Code Violation/*/*:10
// if (inspType=='Follow-up Inspection' && inspResult=='In Violation') {
// 	gsoArry = getGuideSheetObjects(inspId);
// 	for(x in gsoArry) br_nch('ENF_GenerateEnfViolationsASIT');
// 	}

// DISABLED: IRSA:Building/Code Violation/*/*:20
// if (inspType == 'Follow-up Inspection' && inspResult == 'In Violation') {
// 	loopTask('Follow-up Inspection',inspResult,'Updated via Script','');
// 	}

if (inspType == 'Follow-up Inspection' && matches(inspResult, '1st Letter', '2nd Letter', 'Correction Notice', 'Custom Letter', 'Door Tag', 'Note')) {
	var nxtinstype = 'Follow-up Inspection';
	var nxtinpnumberofday = 30;
	var nxtinpworkday = nextWorkDay(dateAdd(null, nxtinpnumberofday));
	scheduleInspectDateGroup('BLD_COMPL', nxtinstype, nxtinpworkday, getLastInspector('Follow-up Inspection'));
}

if (inspType == 'Follow-up Inspection' && matches(inspResult, 'Resolved', 'Referred to Comm Improvement')) {
	closeTask('Follow-up Inspection', inspResult, 'Updated by Inspection Result', 'Note');
	closeTask('Case Closed', 'Closed', '', '');
	updateAppStatus('Closed', 'Updated by script');
}

// DISABLED: IRSA:Building/Code Violation/*/*:40
// if (inspType == 'Follow-up Inspection' && inspResult == 'Referred to Code Enforcement') {
// 	closeTask('Follow-up Inspection',inspResult,'Updated by Inspection Result','Note');
// 	closeTask('Case Closed','Closed','','');
// 	}
