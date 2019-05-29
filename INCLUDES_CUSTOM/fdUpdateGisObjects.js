function fdUpdateGisObjects() {

	var rcFireInspArea = getGISInfoArray('CITYOFRC', 'Fire Inspection Areas', 'Zone');
	var rcVHFHSZ = getGISInfoArray('CITYOFRC', 'VHFSZ', 'HAZ_CLASS');
	var rcFirstDueBoundary = getGISInfoArray('CITYOFRC', 'First Due Boundary', 'FIRSTDUE_');
	var rcIsVacant = getGISInfo2('CITYOFRC', 'Parcels', 'VACANT', -5, 'Feet');
	if (rcFireInspArea.length == 0) {
		editAppSpecific('GIS INFO.Inspection Area', 'N/A');
	} else {
		editAppSpecific('GIS INFO.Inspection Area', rcFireInspArea.toString());
	}

	if (!rcVHFHSZ || rcVHFHSZ.length == 0) {
		editAppSpecific('GIS INFO.VHFHSZ', 'N/A');
	} else {
		editAppSpecific('GIS INFO.VHFHSZ', rcVHFHSZ.toString());
	}

	if (rcFirstDueBoundary.length == 0 || !rcFirstDueBoundary) {
		editAppSpecific('GIS INFO.Fire Station', 'N/A');
	} else {
		editAppSpecific('GIS INFO.Fire Station', rcFirstDueBoundary.toString());
	}

	if (rcIsVacant == 'YES') {
		editAppSpecific('GIS INFO.Weed Abatement Area', rcIsVacant.toString());
	} else {
		editAppSpecific('GIS INFO.Weed Abatement Area', 'NO');
	}

	// DISABLED: FD:EMSE:UpdateGISObjects:z90 (not used)
	// var rcFireInspArea = getGISInfoArray2('CITYOFRC','Fire Inspection Areas','Zone',-5,'Feet');
	// var rcVHFHSZ = getGISInfoArray2('CITYOFRC','VHFSZ','HAZ_CLASS',-5,'Feet');
	// var rcFirstDueBoundary = getGISInfoArray2('CITYOFRC','First Due Boundary','FIRSTDUE_',-5,'Feet');
	// var rcIsVacant = getGISInfo2('CITYOFRC','Parcels','VACANT', -5, 'Feet');

}
