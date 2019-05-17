
if (capStatus == 'Issued') {
	updateAppStatus('Inspection Phase','Updated by inspection scheduling');
	}

var bldInspDist = AInfo['GIS INFORMATION.Inspection Area'];
if (!publicUser && inspType != lookup('EMSE:NONBLDGINSPTYPES',inspType) && !(matches(inspGroup,'FCS_HGHPLE','FCS_FIXED')) && matches(inspInspector,'',' ')) {
	assignInspection(inspId,lookup('EMSE:BLDINSP:LOOKUP',bldInspDist));
	}

if (publicUser && inspType != lookup('EMSE:NONBLDGINSPTYPES',inspType) && !(matches(inspGroup,'FCS_HGHPLE','FCS_FIXED'))) {
	assignInspection(inspId,lookup('EMSE:BLDINSP:LOOKUP',bldInspDist));
	}

// DISABLED: ISA:Building/*/*/*:05 N/A
// if (!publicUser && inspType != lookup('EMSE:NONBLDGINSPTYPES',inspType) && (matches(inspGroup,'FCS_ALTMTH','FCS_FPP','FCS_HAZMAT','FCS_HGHPLE','FCS_SPRINK','FCS_ST','FCS_UG')) && matches(inspInspector,'',' ')) {
// 	assignInspection(inspId,'MICHAEL.FRASURE');
// 	}

// DISABLED: ISA:Building/*/*/*:06 N/A
// if (publicUser && inspType != lookup('EMSE:NONBLDGINSPTYPES',inspType) && (matches(inspGroup,'FCS_ALTMTH','FCS_ALARM','FCS_FPP','FCS_HAZMAT','FCS_HGHPLE','FCS_SPRINK','FCS_ST','FCS_UG'))) {
// 	assignInspection(inspId,'MICHAEL.FRASURE');
// 	}

