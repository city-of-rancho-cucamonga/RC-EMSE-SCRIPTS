
if (inspType=='Initial Inspection' && inspResult=='Refer to Fire District') {
	var newCapId = createCap('Fire/District/Field Inspection Report/NA',' ');
	var newAltId = newCapId.getCustomID();
	copyOwner(capId,newCapId);
	copyContacts(capId,newCapId);
	updateAppStatus('Pending','Created from' + capIDString,newCapId);
	aa.cap.copyCapWorkDesInfo(capId, newCapId);
	createCapComment('Inspection has been referred to the Fire District. The new record is: ' + newAltId,capId);
	createCapComment('This record was created from an inspection referral on record ' + capIDString + '.',newCapId);
	holdId = capId;
	capId = newCapId;
	copyParcelGisObjects();
	capId = holdId;
	}

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

