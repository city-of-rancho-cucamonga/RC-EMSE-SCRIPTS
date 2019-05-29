function plnUpdateGisObjects() {

	var rcZoning = getGISInfoArray2('CITYOFRC', 'Zoning', 'N_Descript', -1, 'feet');
	var rcSpecificPlans = getGISInfoArray2('CITYOFRC', 'Specific Plans', 'Name', -5, 'feet');
	var rcPlanCommunity = getGISInfoArray2('CITYOFRC', 'Planned Communities', 'Name', -5, 'feet');
	var rcOverlay = getGISInfoArray2('CITYOFRC', 'Overlays', 'Name', -5, 'feet');
	var rcOverlay1;
	var rcOverlay2;
	var rcOverlay3;
	var rcLandUD = getGISInfoArray2('CITYOFRC', 'Land Use Designations', 'FIRST_GPLU09_Desc', -5, 'feet');
	var rcUniformSignProgram = getGISInfoArray2('CITYOFRC', 'Uniform Sign Programs', 'USP_Number', -5, 'feet');
	var rcStateVHFSZ = getGISInfoArray2('CITYOFRC', 'VHFSZ', 'HAZ_CLASS', -5, 'feet');
	if (!rcZoning || rcZoning.toString() == '') {
		editAppSpecific('LAND USE INFORMATION.Zoning', 'N/A');
	} else {
		editAppSpecific('LAND USE INFORMATION.Zoning', rcZoning.toString());
	}

	if (!rcPlanCommunity || rcPlanCommunity.toString() == '') {
		editAppSpecific('LAND USE INFORMATION.Planned Community', 'N/A');
	} else {
		editAppSpecific('LAND USE INFORMATION.Planned Community', rcPlanCommunity.toString());
	}

	if (!rcSpecificPlans || rcSpecificPlans.toString() == '') {
		editAppSpecific('LAND USE INFORMATION.Specific Plan', 'N/A');
	} else {
		editAppSpecific('LAND USE INFORMATION.Specific Plan', rcSpecificPlans.toString());
	}

	if (!rcOverlay || rcOverlay.toString() == '' || !rcOverlay[0]) {
		editAppSpecific('LAND USE INFORMATION.Overlay Zone 1', 'N/A');
	} else {
		rcOverlay1 = rcOverlay[0];
		editAppSpecific('LAND USE INFORMATION.Overlay Zone 1', rcOverlay1);
	}

	if (!rcOverlay || rcOverlay.toString() == '' || !rcOverlay[1]) {
		editAppSpecific('LAND USE INFORMATION.Overlay Zone 2', 'N/A');
	} else {
		rcOverlay2 = rcOverlay[1];
		editAppSpecific('LAND USE INFORMATION.Overlay Zone 2', rcOverlay2);
	}

	if (!rcOverlay || rcOverlay.toString() == '' || !rcOverlay[2]) {
		editAppSpecific('LAND USE INFORMATION.Overlay Zone 3', 'N/A');
	} else {
		rcOverlay3 = rcOverlay[2];
		editAppSpecific('LAND USE INFORMATION.Overlay Zone 3', rcOverlay3);
	}

	if (!rcLandUD || rcLandUD.toString() == '') {
		editAppSpecific('LAND USE INFORMATION.General Plan Land Use', 'N/A');
	} else {
		editAppSpecific('LAND USE INFORMATION.General Plan Land Use', rcLandUD.toString());
	}

	if (!rcUniformSignProgram || rcUniformSignProgram.toString() == '') {
		editAppSpecific('LAND USE INFORMATION.Uniform Sign Program', 'N/A');
	} else {
		editAppSpecific('LAND USE INFORMATION.Uniform Sign Program', rcUniformSignProgram);
	}

	if (!rcStateVHFSZ || rcStateVHFSZ.toString() == '') {
		editAppSpecific('LAND USE INFORMATION.Is It Within The Very High Fire Severity Zone?', 'No');
	} else {
		editAppSpecific('LAND USE INFORMATION.Is It Within The Very High Fire Severity Zone?', 'Yes');
	}

}
