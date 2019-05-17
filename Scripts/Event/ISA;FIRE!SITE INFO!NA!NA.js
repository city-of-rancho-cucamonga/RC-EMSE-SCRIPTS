
if (inspType == 'Follow-Up Inspection') {
	updateTask('Follow-Up Inspection','Scheduled','scheduled via script','');
	}

if (matches(InspectorFirstName,'',' ')) {
	var fireInspDist = 0;
	var fireInspector;
	if(AInfo['GIS INFO.Inspection Area'] == '' || AInfo['GIS INFO.Inspection Area'] == 0)         fireInspDist = getGISInfo('CITYOFRC','Fire Inspection Areas','Id');
	else                  fireInspDist = AInfo['GIS INFO.Inspection Area'];
	fireInspector = lookup('EMSE:FDINSPECTOR:LOOKUP',fireInspDist);
	logDebug('fireInspDist = ' + fireInspDist + ', fireInspector = ' + fireInspector);
	if(fireInspector)                assignInspection(inspId,fireInspector);
	else                 assignInspection(inspId,currentUserID);
	}

