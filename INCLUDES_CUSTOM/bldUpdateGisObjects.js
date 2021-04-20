function bldUpdateGisObjects() {

	var rcBLDInspectArea = getGISInfo('CITYOFRC', 'Building Inspection Areas', 'INSPECTOR');
	var rcMapBoundaries = getGISInfo('CITYOFRC', 'Parcel And Tract Map Boundaries', 'MAP');
	var rcVHFSZ = getGISInfoArray('CITYOFRC', 'Very High Fire Severity Zone', 'HAZ_CLASS');
	var JUPFZoning = getGISInfo('CITYOFRC', 'Joint Use Public Facility Zones', 'NAME');
	if (!rcVHFSZ || rcVHFSZ.toString() == '') {
		editAppSpecific('GIS INFORMATION.VHFHSZ', 'No');
	} else {
		editAppSpecific('GIS INFORMATION.VHFHSZ', 'Yes');
	}

	if (!rcBLDInspectArea) {
		editAppSpecific('GIS INFORMATION.Inspection Area', 'N/A');
	} else {
		editAppSpecific('GIS INFORMATION.Inspection Area', rcBLDInspectArea);
	}

	if (!rcMapBoundaries) {
		editAppSpecific('GIS INFORMATION.Tract', 'N/A');
	} else {
		editAppSpecific('GIS INFORMATION.Tract', rcMapBoundaries);
	}

	if (!JUPFZoning) {
		editAppSpecific('GIS INFORMATION.JUPF Zone', 'false');
	} else {
		editAppSpecific('GIS INFORMATION.JUPF Zone', JUPFZoning);
	}

}
