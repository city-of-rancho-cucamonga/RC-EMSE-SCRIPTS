
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
	bldUpdateGisObjects();
}

if (typeof(SIGNTYPE) == 'object' && !publicUser) {
	//replaced branch(BLDEMSEFee:SignFee)
	bldSignFee();
}
