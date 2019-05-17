
if (validateGisObjects()) {
	
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
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

