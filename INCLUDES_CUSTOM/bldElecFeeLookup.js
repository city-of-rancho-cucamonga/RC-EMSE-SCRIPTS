function bldElecFeeLookup() {

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Outdoor events- carnival rides, electric generators') newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 328;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Temporary power pole meter panel') newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 197;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Temporary power pole- distribution panel') newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 66;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Receptacle, switch, lighting fixtures' && ELECTRICALINFORMATIONTABLE [xxx]['Quantity']>0) newEleTotal += 197;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Receptacle, switch, lighting fixtures' && ELECTRICALINFORMATIONTABLE [xxx]['Quantity']>10) newEleTotal += (ELECTRICALINFORMATIONTABLE [xxx]['Quantity']-10) * 33;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Appliances, apparatus- residential') newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 197;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Appliances, apparatus- Commercial') newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 197;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Motors, generators- residential') newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 197;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Motors, generators, transformer- commercial') newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 328;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Electrical service less than 400 amp') newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 262;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Electrical service panel 401 amp - 1200 amp- commercial') newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 459;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Electrical service panel over 1200 amp- commercial') newEleTotal += ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 656;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Conduits for future use' && ELECTRICALINFORMATIONTABLE [xxx]['Quantity']>0) newEleTotal += 164;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Conduits for future use' && ELECTRICALINFORMATIONTABLE [xxx]['Quantity']>500) newEleTotal += (ELECTRICALINFORMATIONTABLE [xxx]['Quantity']-500) * 66;
	}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	for (xxx in ELECTRICALINFORMATIONTABLE) if (ELECTRICALINFORMATIONTABLE[xxx]['Electrical Type'] == 'Meter pedestal') newEleTotal +=ELECTRICALINFORMATIONTABLE[xxx]['Quantity'] * 164;
	}

}
