
if (wfTask == 'Permit Coordination' && wfStatus == 'Ready to Issue' && isTaskActive('Follow-Up Inspection')) {
	cancel = true;
	showMessage = true;
	logMessage('Cannot close the close until all inspections and violations have been resolved');
}

wfAsgnArray = new Array();
wfAsgnArray = loadTasks(capId);
var openWFTasks = false;
for (x in wfAsgnArray)
	if (matches(x, 'Follow-Up Inspection', 'Permit Coordination', 'Permit Issuance', 'Court Process', 'Administrative Citation Hearing Process') && wfAsgnArray[x].active == 'Y')
		openWFTasks = true;
// DISABLED: WTUB:Fire/District/Operating Permit/NA:04
// if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && openWFTasks) {
// 	cancel=true;
// 	showMessage=true;
// 	logMessage('Cannot close the close until all inspections and violations have been resolved');
// 	}
