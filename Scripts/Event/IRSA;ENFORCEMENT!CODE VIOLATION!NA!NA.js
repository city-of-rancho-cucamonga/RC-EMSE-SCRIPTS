
// DISABLED: IRSA:Enforcement/Code Violation/NA/NA:01
// if (inspType=='Initial Inspection' && inspResult=='Referred to Fire') {
// 	var newCapId = createCap('Fire/District/Field Inspection Report/NA',' ');
// 	copyOwner(capId,newCapId);
// 	copyAddresses(capId,newCapId);
// 	copyContacts(capId,newCapId);
// 	updateAppStatus('Pending','Created from' + capIDString,newCapId);
// 	aa.cap.copyCapWorkDesInfo(capId, newCapId);
// 	createCapComment('Inspection has been referred to the Fire District. The new record is: ' + newAltId,capId);
// 	createCapComment('This record was created from an inspection referral on record ' + capIDString + '.',newCapId);
// 	holdId = capId;
// 	capId = newCapId;
// 	copyParcelGisObjects();
// 	capId = holdId;
// 	}

if (inspType=='Initial Inspection' && inspResult=='Founded') {
	gsoArry = getGuideSheetObjects(inspId);
	for(x in gsoArry) //replaced branch(ENF_GenerateEnfViolationsASIT)
enfGenerateViolations();
	}

if (inspType=='Follow-up Inspection' && inspResult=='In Violation') {
	gsoArry = getGuideSheetObjects(inspId);
	for(x in gsoArry) //replaced branch(ENF_GenerateEnfViolationsASIT)
enfGenerateViolations();
	}

// DISABLED: IRSA:Enforcement/Code Violation/NA/NA:04
// if (inspType=='Priority Inspection' && inspResult=='In Violation') {
// 	gsoArry = getGuideSheetObjects(inspId);
// 	for(x in gsoArry) br_nch('ENF_GenerateEnfViolationsASIT');
// 	}

if (inspType=='Initial Inspection' && inspResult=='Referred to Building') {
	var bldCodeId = createCap('Building/Code Violation/NA/NA','Created from: ' + capIDString);
	updateAppStatus('Pending','Updated by script',bldCodeId);
	copyAddresses(capId,bldCodeId);
	copyParcels(capId,bldCodeId);
	copyOwner(capId,bldCodeId);
	copyContacts(capId,bldCodeId);
	aa.cap.copyCapWorkDesInfo(capId,bldCodeId);
	copyAppSpecific(bldCodeId);
	holdId = capId;
	capId = bldCodeId;
	copyParcelGisObjects();
	capId = holdId;
	closeTask('Case Closed','Close','Updated by Refer To Building script','');
	}

