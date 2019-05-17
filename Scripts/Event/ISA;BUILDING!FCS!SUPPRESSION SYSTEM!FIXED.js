
if (capStatus == 'Issued') {
	updateAppStatus('Inspection Phase','Updated by inspection scheduling');
	}

if (validateGisObjects()) {
	
//replaced branch(FD-BLD:EMSE:UpdateGISObjects)
fdBldUpdateGisObjects();
	}

var fireInspDist = AInfo['GIS INFORMATION.Inspection Area'];
if (!publicUser && inspType != lookup('EMSE:NONBLDGINSPTYPES',inspType) && (matches(inspGroup,'FCS_FIXED','FCS_HGHPLE')) && matches(inspInspector,'',' ')) {
	assignInspection(inspId,lookup('EMSE:FDINSPECTOR:LOOKUP',fireInspDist));
	}

if (publicUser && inspType != lookup('EMSE:NONBLDGINSPTYPES',inspType) &&(matches(inspGroup,'FCS_FIXED','FCS_HGHPLE'))) {
	assignInspection(inspId,lookup('EMSE:FDINSPECTOR:LOOKUP',fireInspDist));
	}

