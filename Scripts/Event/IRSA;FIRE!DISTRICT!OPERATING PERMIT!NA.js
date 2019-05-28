
if (inspType == 'Initial Inspection' && inspResult == 'No Violations') {
	branchTask('Initial Inspection',inspResult,'Updated via Inspection','');
	assignCap(currentUserID);
	}

if (inspType == 'Initial Inspection' && inspResult == 'Corrections Needed') {
	closeTask('Initial Inspection',inspResult,'Updated via Inspection','');
	assignCap(currentUserID);
	fireDistCorrectionsOP();
	}

if (inspType == 'Follow-up Inspection' && inspResult == 'Violations Corrected') {
	branchTask('Follow-up Inspection',inspResult,'Updated via Inspection','');
	}

if (inspType == 'Follow-up Inspection' && inspResult == 'Corrections Needed') {
	loopTask('Follow-up Inspection',inspResult,'Updated via Inspection','');
	fireDistCorrectionsOP();
	}

if (inspType == 'Follow-up Inspection' && matches(inspResult,'Refere to Admin Citation','Refer to City Prosecutor')) {
	loopTask('Follow-up Inspection',inspResult,'Updated via Inspection','');
	}

if (matches(inspType,'Initial Inspection','Follow-up Inspection')) {
	//replaced branch(IRSA:EMSE:FireDistrict:InvoiceFees)
fireDistrictInvoiceFees();
	}

if (inspType == 'Initial Inspection' && inspResult == 'Refer to Planning') {
	fdReferToPlanning();
	closeTask('Case Closed','Closed','Updated by Refer to Planning script','');
	assignCap(currentUserID);
	}

if (inspType == 'Initial Inspection' && inspResult == 'Refer to Building and Safety') {
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
	assignCap(currentUserID);
	}

if (inspType == 'Initial Inspection' && inspResult == 'Refer to Code Enforcement') {
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
	assignCap(currentUserID);
	//branch('FD:EMSE:LOOPCOMPLIANCENOTES');
	var fdCodeWorkDesc = 'Fire Referral ';
	for (x in COMPLIANCENOTES) fdCodeWorkDesc+=(COMPLIANCENOTES[x]['Compliance Notes and Instructions'] + ', ');
	updateWorkDesc(fdCodeWorkDesc,codeVioId);
	comment('what is fdCodeWorkDesc = ' +fdCodeWorkDesc);
	}

