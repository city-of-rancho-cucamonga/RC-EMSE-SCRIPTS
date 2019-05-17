
if (validateGisObjects()) {
	
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

// DISABLED: WTUA:Engineering/Grading/*/*:20
// if (wfTask == 'Grading Review' && wfStatus == 'Approved') {
// 	setTask('Grading Review','N','Y');
// 	wfTask == 'Permit Issuance' && wfStatus=='Issued';
//	} else {

// 	priAddrRec = PriAddressOnCap();
// 	email('AA.EnvironmentalPrograms@cityofrc.us', 'AA-NoReply@cityofrc.us', 'Grading permit has been issued: ' + capIDString, 'Grading permit ' + capIDString + ' has been issued. The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
// 	}

if (wfTask == 'Grading Review' && wfStatus == 'Approved') {
	priAddrRec = PriAddressOnCap();
	email('AA.EnvironmentalPrograms@cityofrc.us', 'AA-NoReply@cityofrc.us', 'Grading Review has been Approved on: ' + capIDString, 'The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
	}

