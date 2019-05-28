
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
	bldUpdateGisObjects();
}

if (typeof(WQMPINFORMATIONDETAIL) == 'object') {
	//replaced branch(BLDEMSEFee:WQMFee)
	bldWQMFee();
}
