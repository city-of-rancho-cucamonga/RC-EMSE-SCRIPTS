function bldMiscMH() {

	newMiscTotal = 0;

	//start replaced branch: BuildingMiscFeeMH:Lookup
	{
		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Awning w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Cabana w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Carport w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Deck w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;

		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Earthquake Bracing w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Enclosure w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Foundation Support System w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Garage w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Porch w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Ramada w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Shed w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

		if (typeof(ACCESSORYSTRUCTURETABLE) == 'object') {
			for (xxx in ACCESSORYSTRUCTURETABLE)
				if (ACCESSORYSTRUCTURETABLE[xxx]['Accessory Structure Type'] == 'Storage Building w/ SPA')
					newMiscTotal += ACCESSORYSTRUCTURETABLE[xxx]['Quantity'] * 196.00;
		}

	}
	//end replaced branch: BuildingMiscFeeMH:Lookup;
	if (newMiscTotal > 0) {
		updateFee('MBH020', 'BLD_MBH', 'FINAL', newMiscTotal, 'N');
	}

}
