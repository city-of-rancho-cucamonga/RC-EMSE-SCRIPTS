
if (validateGisObjects()) {
	//replaced branch(FD:EMSE:UpdateGISObjects)
	fdUpdateGisObjects();
}

var fireInspDist = 0;
var fireInspector;
// scheduleInspection('Initial Inspection',0,currentUserID);
if (currentUserGroup != 'FirePublicUser') {
	fireInspDist = getGISInfoArray('CITYOFRC', 'Fire Inspection Areas', 'Zone');
	fireInspector = lookup('EMSE:FDINSPECTOR:LOOKUP', fireInspDist);
	//logDebug('fireInspDist = ' + fireInspDist + ', fireInspector = ' + fireInspector);
}

if (fireInspector) {
	assignCap(fireInspector);
	assignTask('Initial Inspection', fireInspector);
}

// DISABLED: ASA:Fire/Site Info/NA/NA:z90 (not used)
// if (currentUserGroup != 'FirePublicUser') {
// 	fireInspDist = getGISInfo('CITYOFRC','Fire Inspection Areas','Zone');
// 	fireInspector = lookup('EMSE:FDINSPECTOR:LOOKUP',fireInspDist);
// 	//logDebug('fireInspDist = ' + fireInspDist + ', fireInspector = ' + fireInspector);
// 	}
