
if (validateGisObjects()) {
	
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	
//replaced branch(BLDEMSEFee:ElectricalFee)
bldElecFee();
	}

