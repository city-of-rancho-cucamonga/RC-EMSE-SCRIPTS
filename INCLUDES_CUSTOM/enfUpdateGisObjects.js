function enfUpdateGisObjects() {

	var rcTrashPickup = getGISInfo('CITYOFRC', 'Trash Pickup Schedule', 'DAY');
	var rcEnforceInspectArea = getGISInfo('CITYOFRC', 'Enforcement Inspection Areas', 'INSPECTOR');
	var rcZoningDescription = getGISInfo('CITYOFRC', 'Zoning', 'N_Descript');
	var rcUniformSignProgram = getGISInfo('CITYOFRC', 'Uniform Sign Programs', 'USP_Number');
	var rcMapBoundaries = getGISInfo('CITYOFRC', 'Map Boundaries', 'MAP');
	if (!rcTrashPickup) {
		editAppSpecific('COMPLAINT INFORMATION.Trash Day', 'N/A');
	} else {
		editAppSpecific('COMPLAINT INFORMATION.Trash Day', rcTrashPickup);
	}

	if (!rcEnforceInspectArea) {
		editAppSpecific('COMPLAINT INFORMATION.Inspection Area', 'N/A');
	} else {
		editAppSpecific('COMPLAINT INFORMATION.Inspection Area', rcEnforceInspectArea);
	}

	if (!rcZoningDescription) {
		editAppSpecific('COMPLAINT INFORMATION.Zoning', 'N/A');
	} else {
		editAppSpecific('COMPLAINT INFORMATION.Zoning', rcZoningDescription);
	}

	if (!rcUniformSignProgram) {
		editAppSpecific('COMPLAINT INFORMATION.Uniform Sign Program', 'N/A');
	} else {
		editAppSpecific('COMPLAINT INFORMATION.Uniform Sign Program', rcUniformSignProgram);
	}

	if (!rcMapBoundaries) {
		editAppSpecific('COMPLAINT INFORMATION.Improvement Plans', 'N/A');
	} else {
		editAppSpecific('COMPLAINT INFORMATION.Improvement Plans', rcMapBoundaries);
	}

}
