
if (validateGisObjects()) {
	
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

if (typeof(AREAINFORMATION) == 'object' && !publicUser) {
	
//replaced branch(BLDEMSEFee:BuildingTI)
bldTI();
	}

