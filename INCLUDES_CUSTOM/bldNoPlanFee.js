function bldNoPlanFee() {

	newNPTotal = 0;

	//start replaced branch: BuildingNoPlanFee:Lookup
	{
		if (typeof(ELECTRICALINFORMATION) == 'object') {
			for (xxx in ELECTRICALINFORMATION)
				if (ELECTRICALINFORMATION[xxx]['Electrical Type'] == 'Service Panel (Upgrade/New) 100-200 Amp max.')
					newNPTotal += ELECTRICALINFORMATION[xxx]['Quantity'] * 262.00;
		}

		if (typeof(MECHANICALINFORMATION) == 'object') {
			for (xxx in MECHANICALINFORMATION)
				if (MECHANICALINFORMATION[xxx]['Mechanical Type'] == 'Heating Unit, Compressor, Evaporative Cooler')
					newNPTotal += MECHANICALINFORMATION[xxx]['Quantity'] * 250.00;
		}

		if (typeof(MECHANICALINFORMATION) == 'object') {
			for (xxx in MECHANICALINFORMATION)
				if (MECHANICALINFORMATION[xxx]['Mechanical Type'] == 'Ductwork Only')
					newNPTotal += MECHANICALINFORMATION[xxx]['Quantity'] * 131.00;
		}

		
		//Need to modify
		//if (typeof(MECHANICALINFORMATION) == 'object') {
			//for (xxx in MECHANICALINFORMATION)
				//if (MECHANICALINFORMATION[xxx]['Mechanical Type'] == 'HVAC W/Ductwork (Replacement Only/Same Location)')
					//newNPTotal += MECHANICALINFORMATION[xxx]['Quantity'] * 262.00;
		//}

		//Modified from above  (NOT WORKING YET)
		if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
			for (xxx in MECHANICALINFORMATIONTABLE)
				if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'HVAC W/Ductwork (Replacement Only/Same Location)' && parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity']) == 1)
					newNPTotal += MECHANICALINFORMATION[xxx]['Quantity'] * 262.00;

		//comment('What is newNPTotal = ' + newNPTotal);
		}

		//if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		//for (xxx in MECHANICALINFORMATIONTABLE)
		//	if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'HVAC W/Ductwork (Replacement Only/Same Location)' && parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity']) > 1)
		//		newNPTotal += (MECHANICALINFORMATIONTABLE[xxx]['Quantity'] - 1) * 51;
		//comment('What is newNPTotal = ' + newNPTotal);
		//}




		
		if (typeof(MECHANICALINFORMATION) == 'object') {
			for (xxx in MECHANICALINFORMATION)
				if (MECHANICALINFORMATION[xxx]['Mechanical Type'] == 'Package unit or split system no Ductwork')
					newNPTotal += MECHANICALINFORMATION[xxx]['Quantity'] * 197.00;
		}

		if (typeof(PLUMBINGINFORMATION) == 'object') {
			for (xxx in PLUMBINGINFORMATION)
				if (PLUMBINGINFORMATION[xxx]['Plumbing Item'] == 'Tankless Water Heater')
					newNPTotal += PLUMBINGINFORMATION[xxx]['Quantity'] * 197.00;
		}

		if (typeof(PLUMBINGINFORMATION) == 'object') {
			for (xxx in PLUMBINGINFORMATION)
				if (PLUMBINGINFORMATION[xxx]['Plumbing Item'] == 'Water Heater')
					newNPTotal += PLUMBINGINFORMATION[xxx]['Quantity'] * 131.00;
		}

	}
	//end replaced branch: BuildingNoPlanFee:Lookup;
	// DISABLED: BLDEMSEFee:NoPlanFee:30
	// if (newNPTotal > 0) {
	// 	updateFee('NPRESINSP','BLD_NP_RES','FINAL',newNPTotal*1.019*1.020*1.025*1.024*1.025,'Y');
	// 	updateFee('NPRESTECH','BLD_NP_RES','FINAL',1,'Y');
	// 	}

	if (newNPTotal > 0) {
		updateFee('NPRESINSP', 'BLD_NP_RES', 'FINAL', newNPTotal*1.026, 'Y');
		updateFee('NPRESTECH', 'BLD_NP_RES', 'FINAL', 1, 'Y');
		updateFee('NPPROCESSFEE', 'BLD_NP_RES', 'FINAL', 1, 'Y', 'N');
		updateFee('NPRESGP', 'BLD_NP_RES', 'FINAL', 1, 'Y');
	}

	// DISABLED: BLDEMSEFee:NoPlanFee:50
	// if (!feeExists(NPPROCESSFEE)) {
	// 	}

}
