
if (validateGisObjects()) {
	
//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

if (typeof(FIREALARMDETAIL) == 'object' && !publicUser) {
	
//replaced branch(FCSEMSEFee:AlarmFee)
fcsFeeAlarm();
	}

