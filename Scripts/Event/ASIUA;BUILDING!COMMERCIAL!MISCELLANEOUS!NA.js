
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
	bldUpdateGisObjects();
}

if (typeof(TYPESOFWORK) == 'object') {
	//replaced branch(BLDEMSEFee:MiscFee)
	bldMiscFee();
}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	//replaced branch(BLDEMSEFee:ElectricalFeeNoSplit)
	bldElecFeeNoSplit();
}

if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	//replaced branch(BLDEMSEFee:MechanicalFeeNoSplit)
	bldMechFeeNoSplit();
}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	//replaced branch(BLDEMSEFee:PlumbingFeeNoSplit)
	bldPlumbingFeeNoSplit();
}

// DISABLED: ASIUA:Building/Commercial/Miscellaneous/NA:z30
// if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
// 	br_nch('BLDEMSEFee:ElectricalFee');
// 	}

// DISABLED: ASIUA:Building/Commercial/Miscellaneous/NA:z50
// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
// 	br_nch('BLDEMSEFee:PlumbingFee');
// 	}
