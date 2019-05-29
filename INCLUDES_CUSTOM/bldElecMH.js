function bldElecMH() {

	newEleTotal = 0;

	//start replaced branch: BuildingEleFeeMH:Lookup
	{
		if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
			for (xxx in ELECTRICALINFORMATIONTABLE)
				if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Circuit or other electrical equipment')
					newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 46.50;
		}

		if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
			for (xxx in ELECTRICALINFORMATIONTABLE)
				if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Electrical Outlets, light fixtures')
					newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 51.50;
		}

		if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
			for (xxx in ELECTRICALINFORMATIONTABLE)
				if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Electrical Service')
					newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 52.00;
		}

		if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
			for (xxx in ELECTRICALINFORMATIONTABLE)
				if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Motor < 50 hp')
					newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 49.25;
		}

		if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
			for (xxx in ELECTRICALINFORMATIONTABLE)
				if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Motor > 50 hp')
					newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 55.50;
		}

	}
	//end replaced branch: BuildingEleFeeMH:Lookup;
	if (newEleTotal > 0) {
		updateFee('MBH080', 'BLD_MBH', 'FINAL', newEleTotal, 'N');
	}

}
