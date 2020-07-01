function fcsFeeAlarm() {

	newFCSAlarmTotal = 0;

	//start replaced branch: FCS_AlarmFee:Lookup
	{
		if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Fire Alarm and Sprinkler Monitoring System' && FIREALARMDETAIL[xxx]['Quantity'] > 0 && FIREALARMDETAIL[xxx]['Quantity'] <= 15)
					newFCSAlarmTotal += 722.00;
		}

		if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Fire Alarm and Sprinkler Monitoring System' && FIREALARMDETAIL[xxx]['Quantity'] > 15 && FIREALARMDETAIL[xxx]['Quantity'] <= 50)
					newFCSAlarmTotal += 984.00;
		}

		if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Fire Alarm and Sprinkler Monitoring System' && FIREALARMDETAIL[xxx]['Quantity'] > 50 && FIREALARMDETAIL[xxx]['Quantity'] <= 100)
					newFCSAlarmTotal += 1246.00;
		}

		if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Fire Alarm and Sprinkler Monitoring System' && FIREALARMDETAIL[xxx]['Quantity'] > 100 && FIREALARMDETAIL[xxx]['Quantity'] <= 500)
					newFCSAlarmTotal += 1903.00;
		}

		if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Fire Alarm and Sprinkler Monitoring System' && FIREALARMDETAIL[xxx]['Quantity'] > 500)
					newFCSAlarmTotal += (Math.ceil((parseInt(FIREALARMDETAIL[xxx]['Quantity']) - 500) / 25) * 157.00) + 1903.00;
		}


// ADD NEW FEE
if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Fire Alarm & Sprinkler Monitoring Production' && FIREALARMDETAIL[xxx]['Quantity'] > 0 && FIREALARMDETAIL[xxx]['Quantity'] <= 15)
					newFCSAlarmTotal += 357.46;
		}

		if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Fire Alarm & Sprinkler Monitoring Production' && FIREALARMDETAIL[xxx]['Quantity'] > 15 && FIREALARMDETAIL[xxx]['Quantity'] <= 50)
					newFCSAlarmTotal += 486.51;
		}

		if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Fire Alarm & Sprinkler Monitoring Production' && FIREALARMDETAIL[xxx]['Quantity'] > 50 && FIREALARMDETAIL[xxx]['Quantity'] <= 100)
					newFCSAlarmTotal += 617.54;
		}

		if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Fire Alarm & Sprinkler Monitoring Production' && FIREALARMDETAIL[xxx]['Quantity'] > 100 && FIREALARMDETAIL[xxx]['Quantity'] <= 500)
					newFCSAlarmTotal += 941.86;
		}

		if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Fire Alarm & Sprinkler Monitoring Production' && FIREALARMDETAIL[xxx]['Quantity'] > 500)
					newFCSAlarmTotal += (Math.ceil((parseInt(FIREALARMDETAIL[xxx]['Quantity']) - 500) / 25) * 75.97) + 941.86;
		}




		if (typeof(FIREALARMDETAIL) == 'object') {
			for (xxx in FIREALARMDETAIL)
				if (FIREALARMDETAIL[xxx]['Type of Use'] == 'Refrigerant Monitoring System')
					newFCSAlarmTotal += parseFloat(FIREALARMDETAIL[xxx]['Quantity']) * 787.00;
			comment('What is Refrigerant Monitoring System = ' + newFCSAlarmTotal);
		}

		// DISABLED: FCS_AlarmFee:Lookup:z01
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Dampers') newFCSAlarmTotal += parseFloat(FIREALARMDETAIL [xxx]['Quantity']) * 92.30;
		// 	comment('What is Dampers = ' + newFCSAlarmTotal);
		// 	}

		// DISABLED: FCS_AlarmFee:Lookup:z02
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Devices' && FIREALARMDETAIL[xxx]['Quantity'] <= 15) newFCSAlarmTotal += 150.00;
		// 	}

		// DISABLED: FCS_AlarmFee:Lookup:z03
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Devices' && FIREALARMDETAIL[xxx]['Quantity'] > 15 && FIREALARMDETAIL[xxx]['Quantity'] <= 50) newFCSAlarmTotal += 207.00;
		// 	}

		// DISABLED: FCS_AlarmFee:Lookup:z04
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Devices' && FIREALARMDETAIL[xxx]['Quantity'] > 50 && FIREALARMDETAIL[xxx]['Quantity'] <= 100) newFCSAlarmTotal += 323.00;
		// 	}

		// DISABLED: FCS_AlarmFee:Lookup:z05
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Devices' && FIREALARMDETAIL[xxx]['Quantity'] > 100 && FIREALARMDETAIL[xxx]['Quantity'] <= 500) newFCSAlarmTotal += 323.00;
		// 	}

		// DISABLED: FCS_AlarmFee:Lookup:z06
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Devices' && FIREALARMDETAIL[xxx]['Quantity'] > 500 && FIREALARMDETAIL[xxx]['Quantity'] <= 1000) newFCSAlarmTotal += 323.00 + (Math.ceil((FIREALARMDETAIL [xxx]['Quantity']-500)/25) * 92.30);
		// 	}

		// DISABLED: FCS_AlarmFee:Lookup:z07
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Devices' && FIREALARMDETAIL[xxx]['Quantity'] > 1000) newFCSAlarmTotal += 761.34;
		// 	}

		// DISABLED: FCS_AlarmFee:Lookup:z08
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Graphic Annunciator') newFCSAlarmTotal += parseFloat(FIREALARMDETAIL [xxx]['Quantity']) * 92.30;
		// 	comment('What is Devices = ' + newFCSAlarmTotal);
		// 	}

		// DISABLED: FCS_AlarmFee:Lookup:z09
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Hi/Low Alarms') newFCSAlarmTotal += parseFloat(FIREALARMDETAIL [xxx]['Quantity']) * 92.30;
		// 	comment('What is Devices = ' + newFCSAlarmTotal);
		// 	}

		// DISABLED: FCS_AlarmFee:Lookup:z10
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Hourly Review') newFCSAlarmTotal += parseFloat(FIREALARMDETAIL [xxx]['Quantity']) * 126.89;
		// 	comment('What is Devices = ' + newFCSAlarmTotal);
		// 	}

		// DISABLED: FCS_AlarmFee:Lookup:z11
		// if (typeof(FIREALARMDETAIL) == 'object') {
		// 	for (xxx in FIREALARMDETAIL) if (FIREALARMDETAIL [xxx]['Type of Use'] == 'Low air/temp alarms') newFCSAlarmTotal += parseFloat(FIREALARMDETAIL [xxx]['Quantity']) * 92.30;
		// 	comment('What is Devices = ' + newFCSAlarmTotal);
		// 	}

	}
	//end replaced branch: FCS_AlarmFee:Lookup;
	// DISABLED: FCSEMSEFee:AlarmFee:03
	// if (newFCSAlarmTotal > 0) {
	// 	updateFee('FCS010','FCS_STANDARD','FINAL', newFCSAlarmTotal*1.019*1.020*1.025*1.024*1.025,'N');
	// 	updateFee('FCS020','FCS_STANDARD','FINAL', newFCSAlarmTotal*1.019*1.020*1.025*1.024*1.025,'N');
	// 	}

	if (newFCSAlarmTotal > 0) {
		updateFee('FCS011', 'FCS_STANDARD', 'FINAL', newFCSAlarmTotal*1.026*1.029, 'N');
		updateFee('FCS021', 'FCS_STANDARD', 'FINAL', newFCSAlarmTotal*1.026*1.029, 'N');
		updateFee('FCS050', 'FCS_STANDARD', 'FINAL', newFCSAlarmTotal, 'N');
		updateFee('FCS055', 'FCS_STANDARD', 'FINAL', newFCSAlarmTotal, 'N');
	}

}
