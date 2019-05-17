
if (validateGisObjects()) {
	
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

if (typeof(AREAINFORMATION) == 'object') {
	
//replaced branch(BLDEMSEFee:BuildingResNew)
bldResNew();
	}

// DISABLED: ASIUA:Building/Residential/New Construction/NA:30
// if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
// 	br_nch('BLDEMSEFee:ElectricalFee');
// 	}

// DISABLED: ASIUA:Building/Residential/New Construction/NA:40
// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
// 	br_nch('BLDEMSEFee:MechanicalFee');
// 	}

// DISABLED: ASIUA:Building/Residential/New Construction/NA:50
// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
// 	br_nch('BLDEMSEFee:PlumbingFee');
// 	}

