
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
	bldUpdateGisObjects();
}

// TODO: these standard choices do not exist
/*
if (typeof(ELECTRICALINFORMATIONTABLE) == 'object' && !publicUser) {
branch('BLD_OSW_EMSEFee:ElectricalFee');
}

if (typeof(MECHANICALINFORMATIONTABLE) == 'object' && !publicUser) {
branch('BLD_OSW_EMSEFee:MechanicalFee');
}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object' && !publicUser) {
branch('BLD_OSW_EMSEFee:PlumbingFee');
}
*/
