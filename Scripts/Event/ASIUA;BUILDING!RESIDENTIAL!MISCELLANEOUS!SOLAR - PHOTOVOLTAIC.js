if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
	bldUpdateGisObjects();
}

if (typeof(WORKDESCRIPTION) == 'object') {
	//replaced branch(BLDEMSEFee:RSolarFee)
	bldSolarFee();
}
