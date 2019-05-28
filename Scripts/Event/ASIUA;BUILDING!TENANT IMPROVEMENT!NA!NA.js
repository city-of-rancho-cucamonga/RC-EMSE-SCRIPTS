
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
if (typeof(AREAINFORMATION) == 'object') {
	//replaced branch(BLDEMSEFee:BuildingTI)
	bldTI();
}

if (typeof(AREAINFORMATION) == 'object' && calcValue >= 100000) {
	//replaced branch(ENG:CDD:EMSE:UPDATEASI)
	engCddUpdateASI();
}
