
if (validateGisObjects()) {
	
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object' && !publicUser) {
	
//replaced branch(BLDEMSEFee:GradingFee)
bldGradingFee();
	}

