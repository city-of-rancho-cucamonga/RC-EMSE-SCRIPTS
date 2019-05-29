function bldSignFee() {

	newSignTotal = 0;

	//start replaced branch: BuildingSignFee:Lookup
	{
		if (typeof(SIGNTYPE) == 'object') {
			for (xxx in SIGNTYPE)
				if (SIGNTYPE[xxx]['Type'] == 'Blade, Channel Letter, Directional (structural)')
					newSignTotal += parseFloat(SIGNTYPE[xxx]['Quantity']) * 341.00;
		}

		if (typeof(SIGNTYPE) == 'object') {
			for (xxx in SIGNTYPE)
				if (SIGNTYPE[xxx]['Type'] == 'Monument (structural and electrical)')
					newSignTotal += parseFloat(SIGNTYPE[xxx]['Quantity']) * 499.00;
		}

		if (typeof(SIGNTYPE) == 'object') {
			for (xxx in SIGNTYPE)
				if (SIGNTYPE[xxx]['Type'] == 'Wall (structural and electrical)')
					newSignTotal += parseFloat(SIGNTYPE[xxx]['Quantity']) * 407.00;
		}

		// DISABLED: BuildingSignFee:Lookup:z01
		// if (typeof(SIGNTYPE) == 'object') {
		// 	for (xxx in SIGNTYPE) if (SIGNTYPE [xxx]['Type'] == 'Directional Sign') newSignTotal += parseFloat(SIGNTYPE [xxx]['Quantity']) * 63.44;
		// 	}

		// DISABLED: BuildingSignFee:Lookup:z02
		// if (typeof(SIGNTYPE) == 'object') {
		// 	for (xxx in SIGNTYPE) if (SIGNTYPE [xxx]['Type'] == 'Freeway Sign') newSignTotal += parseFloat(SIGNTYPE [xxx]['Quantity']) * 1015.12;
		// 	}

		// DISABLED: BuildingSignFee:Lookup:z03
		// if (typeof(SIGNTYPE) == 'object') {
		// 	for (xxx in SIGNTYPE) if (SIGNTYPE [xxx]['Type'] == 'Ground/Roof/Projecting Sign') newSignTotal += parseFloat(SIGNTYPE [xxx]['Quantity']) * 195.43;
		// 	}

		// DISABLED: BuildingSignFee:Lookup:z04
		// if (typeof(SIGNTYPE) == 'object') {
		// 	for (xxx in SIGNTYPE) if (SIGNTYPE [xxx]['Type'] == 'Permanent Sign') newSignTotal += parseFloat(SIGNTYPE [xxx]['Quantity']) * 95.16;
		// 	}

		// DISABLED: BuildingSignFee:Lookup:z05
		// if (typeof(SIGNTYPE) == 'object') {
		// 	for (xxx in SIGNTYPE) if (SIGNTYPE [xxx]['Type'] == 'Rework Ground Sign') newSignTotal += parseFloat(SIGNTYPE [xxx]['Quantity']) * 195.43;
		// 	}

		// DISABLED: BuildingSignFee:Lookup:z06
		// if (typeof(SIGNTYPE) == 'object') {
		// 	for (xxx in SIGNTYPE) if (SIGNTYPE [xxx]['Type'] == 'Wall Sign (electric)') newSignTotal += parseFloat(SIGNTYPE [xxx]['Quantity']) * 158.61;
		// 	}

		// DISABLED: BuildingSignFee:Lookup:z07
		// if (typeof(SIGNTYPE) == 'object') {
		// 	for (xxx in SIGNTYPE) if (SIGNTYPE [xxx]['Type'] == 'Wall/Awning Sign (non-electric)') newSignTotal += parseFloat(SIGNTYPE [xxx]['Quantity']) * 126.89;
		// 	}

	}
	//end replaced branch: BuildingSignFee:Lookup;
	// DISABLED: BLDEMSEFee:SignFee:30
	// if (newSignTotal > 0) {
	// 	updateFee('SP010','BLD_SIGN_AR','FINAL', newSignTotal*1.019*1.020*1.025*1.024*1.025,'N');
	// 	updateFee('SP020','BLD_SIGN_AR','FINAL', newSignTotal*1.019*1.020*1.025*1.024*1.025,'N');
	// 	}

	if (newSignTotal > 0) {
		updateFee('SP011', 'BLD_SIGN_AR', 'FINAL', newSignTotal, 'N');
		updateFee('SP021', 'BLD_SIGN_AR', 'FINAL', newSignTotal, 'N');
		updateFee('SP050', 'BLD_SIGN_AR', 'FINAL', newSignTotal, 'N');
		updateFee('SP060', 'BLD_SIGN_AR', 'FINAL', newSignTotal, 'N');
	}

}
