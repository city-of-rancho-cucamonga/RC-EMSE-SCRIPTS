
if (wfTask == 'Correction Notice' && wfStatus == 'Corrections Notice Sent') {
	scheduleInspection('Follow-up Inspection',30,getLastInspector('Initial Inspection'),null,'Scheduled via Script');
	}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('KEY DATES.Issued Date',wfDateMMDDYYYY);
	editAppSpecific('KEY DATES.Expiration Date',dateAdd(wfDateMMDDYYYY,365));
	}

if (wfTask == 'Follow-Up Inspection' && wfStatus == 'Refer to Admin Citation') {
	setTask('Citation Appeal','Y','N','FD_RNW_OP_PER');
	setTask('Appeal to Superior Court','Y','N','FD_FLDINSP_CITATION');
	}

if (wfTask == 'Follow-Up Inspection' && wfStatus == 'Refer to City Prosecutor') {
	setTask('Court Process','Y','N','FD_RNW_OP_PER');
	setTask('Arraignment','Y','N','FD_FLDINSP_COURT');
	}

if (wfTask == 'Correction Notice' && wfStatus == 'Refer to Building and Safety') {
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

if (wfTask == 'Correction Notice' && wfStatus == 'Refer to Planning') {
	fdReferToPlanning();
	closeTask('Case Closed','Closed','Updated by Refer to Planning script','');
	}

