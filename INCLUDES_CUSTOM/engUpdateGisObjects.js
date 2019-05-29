function engUpdateGisObjects() {

	var rcZoning = getGISInfoArray('CITYOFRC', 'Zoning', 'N_Descript');
	var rcFloodHazard = getGISInfoArray('CITYOFRC', 'Flood Hazard Zone', 'FLD_ZONE');
	var rcElectricalUtil = getGISInfoArray('CITYOFRC', 'Electric Utility Service', 'ELECTRIC');
	var rcSpecificPlans = getGISInfoArray('CITYOFRC', 'Specific Plans', 'Name');
	var rcPlanCommunity = getGISInfoArray('CITYOFRC', 'Planned Communities', 'Name');
	var rcLMDNumber = getGISInfoArray2('CITYOFRC', 'Parcels', 'LMD_NAME', -1, 'Feet');
	var rcSLDNumber = getGISInfoArray2('CITYOFRC', 'Parcels', 'SLD_NAME', -1, 'Feet');
	if (!rcZoning || rcZoning.toString() == '') {
		editAppSpecific('ADDITIONAL INFORMATION.Zoning', 'N/A');
	} else {
		editAppSpecific('ADDITIONAL INFORMATION.Zoning', rcZoning.toString());
	}

	if (!rcFloodHazard || rcFloodHazard.toString() == '') {
		editAppSpecific('ADDITIONAL INFORMATION.Flood Zone Area', 'N/A');
	} else {
		editAppSpecific('ADDITIONAL INFORMATION.Flood Zone Area', rcFloodHazard.toString());
	}

	if (!rcElectricalUtil || rcElectricalUtil.toString() == '') {
		editAppSpecific('ADDITIONAL INFORMATION.Electrical Service Area', 'N/A');
	} else {
		editAppSpecific('ADDITIONAL INFORMATION.Electrical Service Area', rcElectricalUtil.toString());
	}

	if (!rcSpecificPlans || rcSpecificPlans.toString() == '') {
		editAppSpecific('ADDITIONAL INFORMATION.Specific Plan', 'N/A');
	} else {
		editAppSpecific('ADDITIONAL INFORMATION.Specific Plan', rcSpecificPlans.toString());
	}

	if (!rcPlanCommunity || rcPlanCommunity.toString() == '') {
		editAppSpecific('ADDITIONAL INFORMATION.Planned Community', 'N/A');
	} else {
		editAppSpecific('ADDITIONAL INFORMATION.Planned Community', rcPlanCommunity.toString());
	}

	if (!rcLMDNumber || rcLMDNumber.toString() == '') {
		editAppSpecific('GENERAL INFO.LMD Number', 'N/A');
	} else {
		editAppSpecific('GENERAL INFO.LMD Number', rcLMDNumber.toString());
	}

	if (!rcSLDNumber || rcSLDNumber.toString() == '') {
		editAppSpecific('GENERAL INFO.SLD Numbers', 'N/A');
	} else {
		editAppSpecific('GENERAL INFO.SLD Numbers', rcSLDNumber.toString());
	}

}
