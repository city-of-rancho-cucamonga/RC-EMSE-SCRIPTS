
if (capStatus == 'Issued') {
	updateAppStatus('Inspection Phase', 'Updated by inspection scheduling');
}

var bldInspDist = AInfo['GIS INFORMATION.Inspection Area'];
if (!publicUser && inspType != lookup('EMSE:NONBLDGINSPTYPES', inspType) && !(matches(inspGroup, 'FCS_HGHPLE', 'FCS_FIXED')) && matches(inspInspector, '', ' ')) {
	assignInspection(inspId, lookup('EMSE:BLDINSP:LOOKUP', bldInspDist));
}

if (publicUser && inspType != lookup('EMSE:NONBLDGINSPTYPES', inspType) && !(matches(inspGroup, 'FCS_HGHPLE', 'FCS_FIXED'))) {
	assignInspection(inspId, lookup('EMSE:BLDINSP:LOOKUP', bldInspDist));
}

// DISABLED: ISA:Engineering/Grading/*/*:50
// if (publicUser && inspType != lookup('EMSE:NONBLDGINSPTYPES',inspType) && !(matches(inspGroup,'FCS_HGHPLE','FCS_FIXED')) && matches(inspInspector,'',' ')) {
// 	assignInspection(inspId,lookup('EMSE:BLDINSP:LOOKUP',bldInspDist));
// 	}
