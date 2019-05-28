
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

if (wfTask == 'Release Bonds' && wfStatus == 'As Built Required') {
	activateTask('Grading Review');
	}

if (wfTask == 'Grading Review' && wfStatus == 'As Built Approved') {
	setTask('Grading Review','N','Y');
	}

if (wfTask == 'Permit Issuance' && wfStatus=='Issued') {
	priAddrRec = PriAddressOnCap();
	email('AA.EnvironmentalPrograms@cityofrc.us', 'AA-NoReply@cityofrc.us', 'Grading permit has been issued: ' + capIDString, 'Grading permit ' + capIDString + ' has been issued. The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
	}

