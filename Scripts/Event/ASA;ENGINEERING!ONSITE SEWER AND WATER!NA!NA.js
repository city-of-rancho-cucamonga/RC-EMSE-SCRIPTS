
if (validateGisObjects()) {
	
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object' && !publicUser) {
	branch('BLD_OSW_EMSEFee:ElectricalFee');
	}

if (typeof(MECHANICALINFORMATIONTABLE) == 'object' && !publicUser) {
	branch('BLD_OSW_EMSEFee:MechanicalFee');
	}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object' && !publicUser) {
	branch('BLD_OSW_EMSEFee:PlumbingFee');
	}

