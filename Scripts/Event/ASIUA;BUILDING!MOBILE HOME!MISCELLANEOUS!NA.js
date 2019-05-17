
if (validateGisObjects()) {
	
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
	
//replaced branch(BLDEMSEFee:MiscMH)
bldMiscMH();
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	
//replaced branch(BLDEMSEFee:EleMH)
bldElecMH();
	}

if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	
//replaced branch(BLDEMSEFee:MecMH)
bldMechMH();
	}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	
//replaced branch(BLDEMSEFee:PlmMH)
bldPlmMH();
	}

