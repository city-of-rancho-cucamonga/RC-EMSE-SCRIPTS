function fcsFeeSprinkler() {

	newFCSSprinklerTotal = 0;

	//start replaced branch: FCS_SprinklerFee:Lookup
	{
		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Call I, II, & III Stand Pipe')
					newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 262.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Clean Agent Gas Systems')
					newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 918.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Deluge / Pre-Action')
					newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 918.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Dry Chemical Systems')
					newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 787.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Dry Pipe Valve')
					newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 105.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Pumps')
					newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 984.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Systems (Production - SFR Tract Homes and Multi-Family)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 0 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 20)
					newFCSSprinklerTotal += 262.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Systems (Production - SFR Tract Homes and Multi-Family)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 20 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 100)
					newFCSSprinklerTotal += 525.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Systems (Production - SFR Tract Homes and Multi-Family)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 100 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 200)
					newFCSSprinklerTotal += 590.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Systems (Production - SFR Tract Homes and Multi-Family)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 200 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 350)
					newFCSSprinklerTotal += 656.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Systems (Production - SFR Tract Homes and Multi-Family)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 350)
					newFCSSprinklerTotal += 787.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Systems for New Construction' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 0 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 20)
					newFCSSprinklerTotal += 459.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Systems for New Construction' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 20 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 100)
					newFCSSprinklerTotal += 787.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Systems for New Construction' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 100 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 200)
					newFCSSprinklerTotal += 918.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Systems for New Construction' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 200 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 350)
					newFCSSprinklerTotal += 1050.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Systems for New Construction' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 350)
					newFCSSprinklerTotal += 1246.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Tenant Improvements (Commercial)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 0 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 4)
					newFCSSprinklerTotal += 394.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Tenant Improvements (Commercial)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 4 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 20)
					newFCSSprinklerTotal += 525.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Tenant Improvements (Commercial)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 20 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 100)
					newFCSSprinklerTotal += 656.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Tenant Improvements (Commercial)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 100 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 200)
					newFCSSprinklerTotal += 787.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Tenant Improvements (Commercial)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 200 && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] <= 350)
					newFCSSprinklerTotal += 918.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Sprinkler Tenant Improvements (Commercial)' && FIRESPRINKLERFLOORDETAIL[xxx]['Quantity'] > 350)
					newFCSSprinklerTotal += 1181.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Foam Systems')
					newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 525.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Hydraulic Calculations')
					newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 131.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Misc. FD Access')
					newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 131.00;
		}

		if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
			for (xxx in FIRESPRINKLERFLOORDETAIL)
				if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Wet Chemical / Kitchen Hood')
					newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 525.00;
		}

		// DISABLED: FCS_SprinklerFee:Lookup:z01
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Antifreeze System') newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 92.30;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z02
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Deluge/Preaction') newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 92.30;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z03
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Dry Pipe Valve') newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 92.30;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z04
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Cycle') newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 34.60;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z05
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Fire Pumps') newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 265.32;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z06
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Hydraulic Calculations') newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 150.00;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z07
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - New' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>0 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=20) newFCSSprinklerTotal += 144.20;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z08
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - New' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>20 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=100) newFCSSprinklerTotal += 323.00;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z09
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - New' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>100 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=200) newFCSSprinklerTotal += 438.35;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z10
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - New' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>200 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=350) newFCSSprinklerTotal += 496.02;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z11
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - New' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>350) newFCSSprinklerTotal += 611.38;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z11.1
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'O/H Fire Sprinklers - New (Production)' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>0 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=20) newFCSSprinklerTotal += 119.54;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z11.2
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'O/H Fire Sprinklers - New (Production)' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>20 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=100) newFCSSprinklerTotal += 267.77;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z11.3
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'O/H Fire Sprinklers - New (Production)' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>100 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=200) newFCSSprinklerTotal += 363.39;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z11.4
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'O/H Fire Sprinklers - New (Production)' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>200 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=350) newFCSSprinklerTotal += 411.20;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z11.5
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'O/H Fire Sprinklers - New (Production)' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>350) newFCSSprinklerTotal += 506.83;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z12
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - TI' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>0 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=4) newFCSSprinklerTotal += 150.00;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z13
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - TI' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>4 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=20) newFCSSprinklerTotal += 207.60;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z14
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - TI' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>20 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=100) newFCSSprinklerTotal += 270.17;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z15
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - TI' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>100 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=200) newFCSSprinklerTotal += 496.00;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z16
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - TI' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>200 && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']<=350) newFCSSprinklerTotal += 496.00;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z17
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Overhead Fire Sprinklers - TI' && FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']>350) newFCSSprinklerTotal += 611.38;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z18
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Pressure Reducing Station') newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 92.30;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z19
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Risers') newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']) * 126.89;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z20
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL[xxx]['Type of Use'] == 'Standpipes') newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL[xxx]['Quantity']) * 150.00;
		// 	}

		// DISABLED: FCS_SprinklerFee:Lookup:z21
		// if (typeof(FIRESPRINKLERFLOORDETAIL) == 'object') {
		// 	for (xxx in FIRESPRINKLERFLOORDETAIL) if (FIRESPRINKLERFLOORDETAIL [xxx]['Type of Use'] == 'Wet/Chemical Suppression') newFCSSprinklerTotal += parseFloat(FIRESPRINKLERFLOORDETAIL [xxx]['Quantity']) * 380.67;
		// 	}

	}
	//end replaced branch: FCS_SprinklerFee:Lookup;
	// DISABLED: FCSEMSEFee:SprinklerFee:30
	// if (newFCSSprinklerTotal > 0) {
	// 	updateFee('FCS010','FCS_STANDARD','FINAL', newFCSSprinklerTotal*1.019*1.020*1.025*1.024*1.025,'N');
	// 	updateFee('FCS020','FCS_STANDARD','FINAL', newFCSSprinklerTotal*1.019*1.020*1.025*1.024*1.025,'N');
	// 	}

	if (newFCSSprinklerTotal > 0) {
		updateFee('FCS011', 'FCS_STANDARD', 'FINAL', newFCSSprinklerTotal*1.026*1.029, 'N');
		updateFee('FCS021', 'FCS_STANDARD', 'FINAL', newFCSSprinklerTotal*1.026*1.029, 'N');
	}

}
