
if (capStatus == 'Issued') {
	updateAppStatus('Inspection Phase','Updated by inspection scheduling');
	}

if (validateGisObjects()) {
	//replaced branch(FD-BLD:EMSE:UpdateGISObjects)
fdBldUpdateGisObjects();
	}

