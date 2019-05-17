
if (wfTask == 'Correction Notice' && wfStatus == 'Correction Notice Sent') {
	fireDistCorrections();
	}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('KEY DATES.Issued Date',wfDateMMDDYYYY);
	}

if (wfTask == 'Follow-Up Inspection' && wfStatus == 'Refer to Admin Citation') {
	setTask('Citation Appeal','Y','N','FD_FLDINSP');
	setTask('Appeal to Superior Court','Y','N','FD_FLDINSP_CITATION');
	}

if (wfTask == 'Follow-Up Inspection' && wfStatus == 'Refer to City Prosecutor') {
	setTask('Court Process','Y','N','FD_FLDINSP');
	setTask('Arraignment','Y','N','FD_FLDINSP_COURT');
	}

if (wfTask == 'Initial Inspection' && matches(wfStatus,'Corrections Needed','No Violations') && AInfo['GENERAL INFORMATION.Operating Permit Required'] == 'Yes') {
	setTask('Permit Coordination','Y','N','FD_FLDINSP');
	}

if (wfTask == 'Initial Inspection' && wfStatus == 'Refer to Code Enforcement') {
	var codeVioId = createCap('Enforcement/Code Violation/NA/NA','Created from: ' + capIDString);
	updateAppStatus('Open','Updated by script',codeVioId);
	copyAddresses(capId,codeVioId);
	copyParcels(capId,codeVioId);
	copyContacts(capId,codeVioId);
	editAppSpecific('COMPLAINT INFORMATION.Source of Complaint','Staff (Non-Code Enforcement)',codeVioId);
	editAppSpecific('COMPLAINT INFORMATION.Type of Submittal','Fire Referral',codeVioId);
	fireHoldId = capId;
	capId = codeVioId;
	copyParcelGisObjects();
	capId = fireHoldId;
	//branch('FD:EMSE:LOOPCOMPLIANCENOTES');
	var fdCodeWorkDesc = 'Fire Referral ';
	for (x in COMPLIANCENOTES) fdCodeWorkDesc+=(COMPLIANCENOTES[x]['Compliance Notes and Instructions'] + ', ');
	updateWorkDesc(fdCodeWorkDesc,codeVioId);
	comment('what is fdCodeWorkDesc = ' +fdCodeWorkDesc);
	}

if (wfTask == 'Initial Inspection' && wfStatus == 'Refer to Planning') {
	fdReferToPlanning();
	closeTask('Case Closed','Closed','Updated by Refer to Planning script','');
	}

if (wfTask == 'Initial Inspection' && wfStatus == 'Refer to Building and Safety') {
	var bldCodeId = createCap('Building/Code Violation/NA/NA','Created from: ' + capIDString);
	updateAppStatus('Open','Updated by script',bldCodeId);
	copyAddresses(capId,bldCodeId);
	copyParcels(capId,bldCodeId);
	copyContacts(capId,bldCodeId);
	fireHoldId = capId;
	capId = bldCodeId;
	copyParcelGisObjects();
	capId = fireHoldId;
	closeTask('Case Closed','Closed','Updated by Refer to Building and Safety script','');
	}

