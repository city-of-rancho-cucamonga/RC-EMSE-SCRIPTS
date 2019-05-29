
if (wfTask == 'Permit Management' && wfStatus == 'Stop Notice') {
	addStdCondition('Eng Permit', 'Stop Notice');
}

if (wfTask == 'City Council' && wfStatus == 'Accept as Complete') {
	scheduleInspection('Maintenance Bond Release', 330);
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && AInfo['GENERAL INFO.Notice to Proceed Date'] != null) {
	scheduleInspectDate('Site', AInfo['GENERAL INFO.Notice to Proceed Date']);
}

if (wfTask == 'Permit Extension' && wfStatus == 'Approved') {
	editAppSpecific('GENERAL INFO.Permit Expires', AInfo['New Expiration Date']);
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('GENERAL INFO.Permit Issued', wfDateMMDDYYYY);
}

if (wfTask == 'Granted Change Order' && wfStatus == 'Approved') {
	var intGCOED = AInfo['GENERAL INFO.Granted Change Order Extension Days'];
	if (intGCOED == null)
		intGCOED = 0;
	editAppSpecific('GENERAL INFO.Granted Change Order Extension Days', parseInt(intGCOED) + parseInt(AInfo['Days Added']));
}

if (wfTask == 'Granted Other Extension' && wfStatus == 'Approved') {
	var intGOED = AInfo['GENERAL INFO.Granted Other Extension Days'];
	if (intGOED == null)
		intGOED = 0;
	editAppSpecific('GENERAL INFO.Granted Other Extension Days', parseInt(intGOED) + parseInt(AInfo['Granted Other Extension Day(s)']));
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && AInfo['Expire Date'] != undefined && AInfo['Expire Date'] != '') {
	editAppSpecific('GENERAL INFO.Permit Expires', AInfo['Expire Date']);
}
