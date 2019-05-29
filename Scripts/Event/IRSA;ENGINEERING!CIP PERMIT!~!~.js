
if (inspType == 'Site' && inspResult == 'Stop Work Notice') {
	addStdCondition('Eng Permit', 'Stop Notice');
}

if (inspType == 'Site' && inspResult == 'Weather Delay') {
	var intGNWWD = AInfo['GENERAL INFO.Granted Non-Working Weather Days'];
	if (intGNWWD == null)
		intGNWWD = 0;
	editAppSpecific('GENERAL INFO.Granted Non-Working Weather Days', parseInt(intGNWWD) + parseInt(1));
}

// DISABLED: IRSA:Engineering/CIP Permit/*/*:03
// if (inspType == 'Site' && !checkInspectionResult('Final','Pass') && !appHasCondition('Eng Permit','Applied','Stop Notice',null)) {
// 	scheduleInspectDate('Site',nextWorkDay(),getLastInspector('Site'));
// 	}

vDate = new Date();
vDay = vDate.getDay();
if (inspType == 'Site' && !checkInspectionResult('Final', 'Pass') && !appHasCondition('Eng Permit', 'Applied', 'Stop Notice', null) && vDay != 4) {
	scheduleInspectDate('Site', nextWorkDay(), getLastInspector('Site'));
}

if (inspType == 'Site' && !checkInspectionResult('Final', 'Pass') && !appHasCondition('Eng Permit', 'Applied', 'Stop Notice', null) && vDay == 4) {
	scheduleInspection('Site', 1, getLastInspector('Site'));
}

if (inspType = 'Site' && matches(inspResult, 'Completed', 'Stop Work Notice', 'Weather Delay')) {
	gsoArry = getGuideSheetObjects(inspId);
	for (x in gsoArry)
		//start replaced branch: ENG:EMSESiteInspASIUpdate
	{
		gsi = gsoArry[x];
		if (gsi.text == 'Working Day' && matches(gsi.status, 'Yes', 'Yes - No Work Done')) {
			editAppSpecific('GENERAL INFO.Working Days to Date', parseInt(AInfo['GENERAL INFO.Working Days to Date']) + 1);
		}

	}
	//end replaced branch: ENG:EMSESiteInspASIUpdate;
}
