
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
	bldUpdateGisObjects();
}

if (typeof(SEPTICINFORMATIONDETAIL) == 'object' && !publicUser) {
	//replaced branch(BLDEMSEFee:SepticFee)
	bldSepticFee();
}
