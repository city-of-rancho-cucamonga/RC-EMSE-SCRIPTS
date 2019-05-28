
if (validateGisObjects()) {

	//start replaced branch: ENGROW:EMSE:UpdateGISObjects
	{
		var rcSpecificPlans = getGISInfoArray('CITYOFRC', 'Specific Plans', 'Name');
		var rcPlanCommunity = getGISInfoArray('CITYOFRC', 'Planned Communities', 'Name');
		if (!rcSpecificPlans || rcSpecificPlans.toString() == '') {
			editAppSpecific('ETIWANDA.Specific Plan', 'N/A');
		} else {
			editAppSpecific('ETIWANDA.Specific Plan', rcSpecificPlans.toString());
		}

		if (!rcPlanCommunity || rcPlanCommunity.toString() == '') {
			editAppSpecific('ETIWANDA.Planned Community', 'N/A');
		} else {
			editAppSpecific('ETIWANDA.Planned Community', rcPlanCommunity.toString());
		}

	}
	//end replaced branch: ENGROW:EMSE:UpdateGISObjects;
}
