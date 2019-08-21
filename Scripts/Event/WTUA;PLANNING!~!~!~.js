
if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && balanceDue > 0 && appTypeArray[3] != 'Permanent') {
	showMessage = true;
	comment('Please double check that fees have been paid.  There currently is a balance due of $' + balanceDue);
}

var childDRCId = undefined;
childDRCId = childGetByCapType('Planning/Application/Environmental/CEQA');
comment('What is childDRCId = ' + childDRCId);
// DISABLED: WTUA:Planning/*/*/*:03 - Create the CEQA
// if (wfTask == 'Environmental Review' && matches(wfStatus,'Negative Declaration','Mitigated Negative Declaration') && childDRCId == undefined) {
// 	childId=createChild('Planning','Application','Environmental','CEQA',capName);
// 	copyOwner(capId,childId);
// 	updateAppStatus('Pending','Created from' + capIDString,childId);
// 	aa.cap.copyCapWorkDesInfo(capId, childId);
// 	holdId = capId;
// 	capId = childId;
// 	copyParcelGisObjects();
// 	capId = holdId;
// 	}

// DISABLED: WTUA:Planning/*/*/*:04 - Close the CEQA p2
// if (matches(wfTask,'Closed') && matches(wfStatus,'Closed') && childDRCId != undefined) {
// 	childTasks = new Array();
// 	childTasks = loadTasks(childDRCId);
// 	for(x in childTasks) if (childTasks[x].active == 'Y') setTask(x,'N','N','PLN_CEQA',childDRCId);
// 	updateAppStatus('Closed','Closed due to Design Review closing',childDRCId);
// 	}

if ((matches(wfTask, 'Staff Report', 'Historic Preservation Commission', 'Planning Commission', 'City Council') && wfStatus == 'Approved') || (wfTask == 'Permit Issuance' && wfStatus == 'Issued')) {
	editAppSpecific('KEY DATES.Approval Date', wfDateMMDDYYYY);
}

var recAsgnStaff = capDetail.getAsgnStaff();
if (recAsgnStaff != null && wfStatus != null) {
	wfTkArray = new Array();
	wfTkArray = loadTasks(capId);
	for (x in wfTkArray)
		if (matches(x, 'Planning Review', 'Environmental Review', 'Review Consolidation') && wfTkArray[x].active == 'Y')
			assignTask(x, recAsgnStaff);
}

if (wfTask == 'Review Consolidation' && wfStatus == 'Incomplete') {
	editTaskSpecific('Application Submittal', 'P&E Agenda Date', '');
}
