
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
	bldUpdateGisObjects();
}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	//replaced branch(BLDEMSEFee:PlumbingFee)
	bldPlumbingFee();
}
