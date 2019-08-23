function fcsFeeUnderground() {

	newFCSUnderTotal = 0;

	//start replaced branch: FCS_UndergroundFee:Lookup
	{
		if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
			for (xxx in FIREUNDERGROUNDDETAIL)
				if (FIREUNDERGROUNDDETAIL[xxx]['Type of Use'] == 'Private Underground Fire Service' && FIREUNDERGROUNDDETAIL[xxx]['Quantity'] <= 5)
					newFCSUnderTotal += 656.00;
		}

		if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
			for (xxx in FIREUNDERGROUNDDETAIL)
				if (FIREUNDERGROUNDDETAIL[xxx]['Type of Use'] == 'Private Underground Fire Service' && FIREUNDERGROUNDDETAIL[xxx]['Quantity'] > 5)
					newFCSUnderTotal += ((parseInt(FIREUNDERGROUNDDETAIL[xxx]['Quantity']) - 5) * 262.00) + 656.00;
		}

		// DISABLED: FCS_UndergroundFee:Lookup:z010
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Fire Cycle') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 34.60;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z020
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Fire Pump') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 265.32;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z030
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Fire Standpipe System - Class I') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 150.00;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z040
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Fire Standpipe System - Class II') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 150.00;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z050
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Fire Standpipe System - Class III') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 150.00;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z060
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Hydrants Flow Test (existing hydrants)') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 126.89;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z070
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Hydrants/Underground Fire Service') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 481.96;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z080
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Hydraulic Calculations') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 150.00;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z090
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Pressure Reducing Station') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 92.30;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z100
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Stand Pipe') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 150.00;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z110
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Water Storage Tank - Gravity') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 150.00;
		// 	}

		// DISABLED: FCS_UndergroundFee:Lookup:z120
		// if (typeof(FIREUNDERGROUNDDETAIL) == 'object') {
		// 	for (xxx in FIREUNDERGROUNDDETAIL) if (FIREUNDERGROUNDDETAIL [xxx]['Type of Use'] == 'Water Storage Tank - Pressure') newFCSUnderTotal += parseFloat(FIREUNDERGROUNDDETAIL [xxx]['Quantity']) * 34.60;
		// 	}

	}
	//end replaced branch: FCS_UndergroundFee:Lookup;
	if (newFCSUnderTotal > 0) {
		updateFee('FCS011', 'FCS_STANDARD', 'FINAL', newFCSUnderTotal*1.026, 'N');
		updateFee('FCS021', 'FCS_STANDARD', 'FINAL', newFCSUnderTotal*1.026, 'N');
	}

}
