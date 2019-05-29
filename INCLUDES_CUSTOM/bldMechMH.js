function bldMechMH() {

	newMecTotal = 0;

	//start replaced branch: BuildingMecFeeMH:Lookup
	{
		if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
			for (xxx in MECHANICALINFORMATIONTABLE)
				if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Air Conditioning Unit')
					newMecTotal += MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 59.00;
		}

		if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
			for (xxx in MECHANICALINFORMATIONTABLE)
				if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Evaporative Cooling System')
					newMecTotal += MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 59.00;
		}

		if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
			for (xxx in MECHANICALINFORMATIONTABLE)
				if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Air Handling Unit')
					newMecTotal += MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 52.00;
		}

	}
	//end replaced branch: BuildingMecFeeMH:Lookup;
	if (newMecTotal > 0) {
		updateFee('MBH090', 'BLD_MBH', 'FINAL', newMecTotal, 'N');
	}

}
