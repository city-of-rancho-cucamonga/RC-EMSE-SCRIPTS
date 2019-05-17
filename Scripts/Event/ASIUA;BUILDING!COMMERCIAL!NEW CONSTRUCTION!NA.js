
if (validateGisObjects()) {
	
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

if (typeof(AREAINFORMATION) == 'object') {
	
//replaced branch(BLDEMSEFee:BuildingPlanInsp)
bldPlanInsp();
	}

// DISABLED: ASIUA:Building/Commercial/New Construction/NA:20
// if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
// 	br_nch('BLDEMSEFee:ElectricalFeeNoSplit');
// 	}

// DISABLED: ASIUA:Building/Commercial/New Construction/NA:30
// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
// 	br_nch('BLDEMSEFee:MechanicalFeeNoSplit');
// 	}

// DISABLED: ASIUA:Building/Commercial/New Construction/NA:40
// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
// 	br_nch('BLDEMSEFee:PlumbingFeeNoSplit');
// 	}

if (typeof(AREAINFORMATION) == 'object' && calcValue >= 100000) {
	
//replaced branch(ENG:CDD:EMSE:UPDATEASI)
engCddUpdateASI();
	}

