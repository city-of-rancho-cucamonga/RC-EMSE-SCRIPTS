function fdBldUpdateGisObjects() {

	var rcFireInspArea = getGISInfo('CITYOFRC', 'Fire Inspection Areas', 'Id');
	var rcVHFHSZ = getGISInfoArray2('CITYOFRC', 'Very High Fire Severity Zone', 'HAZ_CLASS', -5, 'Feet');
	var rcFirstDueBoundary = getGISInfoArray2('CITYOFRC', 'Fire First Due', 'FIRSTDUE_', -5, 'Feet');
	var rcIsVacant = getGISInfo2('CITYOFRC', 'Parcels', 'VACANT', -5, 'Feet');
	if (!rcFireInspArea) {
		editAppSpecific('GIS INFORMATION.Inspection Area', 'NA');
	} else {
		editAppSpecific('GIS INFORMATION.Inspection Area', rcFireInspArea);
	}

	if (!rcVHFHSZ || rcVHFHSZ.length == 0) {
		editAppSpecific('GIS INFORMATION.VHFHSZ', 'No');
	} else {
		editAppSpecific('GIS INFORMATION.VHFHSZ', rcVHFHSZ.toString());
	}

}
