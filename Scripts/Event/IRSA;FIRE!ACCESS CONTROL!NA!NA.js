
if (inspType == 'Gate' && inspResult == 'Passed') {
	scheduleInspection('Gate', 30, currentUserID, null, null);
	updateAppStatus('Passed', 'Updated by inspection scheduling');
	assignCap(currentUserID);
}

if (inspType == 'Gate' && matches(inspResult, 'Failed-Opticon', 'Failed-Knox key switch')) {
	closeTask('Inspection', inspResult, 'Updated via Inspection');
	inspector = getInspector(inspType);
	assignTask('Correction Notice', inspector);
	editTaskSpecific('Correction Notice', 'Last Inspection ID', inspId);
	assignCap(currentUserID);
	updateAppStatus('Failed', 'Updated by Script');
}

if (inspType == 'Gate' && inspResult == 'Violations Cleared') {
	updateAppStatus('Passed', 'Updated by inspection scheduling');
	assignCap(currentUserID);
}
