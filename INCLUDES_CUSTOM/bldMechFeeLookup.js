function bldMechFeeLookup() {

if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'HVAC System - Residential')
				newMecTotal += Math.ceil(parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity'])) * 262.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}


// MODIFY HVAC
//if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		//	for (xxx in MECHANICALINFORMATIONTABLE)
		//		if (MECHANICALINFORMATIONTABLE[xxx]['Type'] == 'HVAC System - Residential' && (MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 1) > 0)
		//			newMiscTotal += 262;
		//}

		//if (typeof(TYPESOFWORK) == 'object') {
		//	for (xxx in TYPESOFWORK)
		//		if (MECHANICALINFORMATIONTABLE[xxx]['Type'] == 'HVAC System - Residential' && (MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 1) > 1)
		//			newMiscTotal += Math.ceil(((MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 1) - 1) / 1) * 50;
	//	}








	if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Exhaust Hood, Vent Fan, Vent System, Heating Unit, Compressor, or Evaporative cooler - Res/Com')
				newMecTotal += Math.ceil(parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity'])) * 250.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}

	if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Package Unit or Split System - Residential')
				newMecTotal += Math.ceil(parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity'])) * 197.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}

	if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Ductwork Only')
				newMecTotal += Math.ceil(parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity'])) * 131.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}

	if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Exhaust Hood Type I - Commercial')
				newMecTotal += Math.ceil(parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity'])) * 744.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}

	if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Dust Collection System - Commercial')
				newMecTotal += Math.ceil(parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity'])) * 1357.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}

	if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Cooling Tower or Heat Exchange - Commercial')
				newMecTotal += Math.ceil(parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity'])) * 878.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}

	if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Exhaust Hood Type II or Other Ventilation System - Commercial')
				newMecTotal += Math.ceil(parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity'])) * 548.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}

	if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Freezer/Cooler - Commercial' && parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity']) <= 500)
				newMecTotal += 416.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}

	if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Freezer/Cooler - Commercial' && parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity']) > 500 && parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity']) <= 50000)
				newMecTotal += 810.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}

	if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
		for (xxx in MECHANICALINFORMATIONTABLE)
			if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Freezer/Cooler - Commercial' && parseFloat(MECHANICALINFORMATIONTABLE[xxx]['Quantity']) > 50000)
				newMecTotal += 1007.00;
		comment('What is newMecTotal = ' + newMecTotal);
	}

	// DISABLED: BuildingMechanicalFee:Lookup:z01
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecACFurnace = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'A/C - Install/Relocate Forced Air or Gravity Type Furnace (Including Ducts)') newMecACFurnace+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.16;
	// 	comment('What is newMecACFurnace = ' + newMecACFurnace);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z02
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecRefrigUnit = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Refrigeration Unit') newMecRefrigUnit+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.16;
	// 	comment('What is newMecRefrigUnit = ' + newMecRefrigUnit);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z03
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecApplVent = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Appliance Vent') newMecApplVent+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.16;
	// 	comment('What is newMecApplVent = ' + newMecApplVent);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z04
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecAirHandleUnits = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Air Handling Units') newMecAirHandleUnits+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.16;
	// 	comment('What is newMecAirHandleUnits = ' + newMecAirHandleUnits);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z05
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecBoilers = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Boilers/Compressors') newMecBoilers+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.16;
	// 	comment('What is newMecBoilers = ' + newMecBoilers);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z06
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecEvapCooler = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Evap Cooler Other Than Portable Type') newMecEvapCooler+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.16;
	// 	comment('What is newMecEvapCooler = ' + newMecEvapCooler);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z07
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecExhaustHoodDuctRes = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Exhaust Hood and Duct (Residential)') newMecExhaustHoodDuctRes+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newMecExhaustHoodDuctRes = ' + newMecExhaustHoodDuctRes);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z08
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecExhaustHoodDuctComT1 = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Exhaust Hood and Duct (Type I, Commercial)') newMecExhaustHoodDuctComT1+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newMecExhaustHoodDuctComT1 = ' + newMecExhaustHoodDuctComT1);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z09
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecExhaustHoodDuctComT2 = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Exhaust Hood and Duct (Type I, Commercial)') newMecExhaustHoodDuctComT2+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newMecExhaustHoodDuctComT2 = ' + newMecExhaustHoodDuctComT2);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z10
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecFloorFurnace = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Floor Furnace') newMecFloorFurnace+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.16;
	// 	comment('What is newMecFloorFurnace = ' + newMecFloorFurnace);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z11
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecMoistExhaustDuct = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Moisture Exhaust Duct (Clothes Dryer)') newMecMoistExhaustDuct+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.16;
	// 	comment('What is newMecMoistExhaustDuct = ' + newMecMoistExhaustDuct);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z12
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecUnitHeaters = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Unit Heaters') newMecUnitHeaters+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.16;
	// 	comment('What is newMecUnitHeaters = ' + newMecUnitHeaters);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z13
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecVentFan = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Vent Fan, Single Duct') newMecVentFan+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.16;
	// 	comment('What is newMecVentFan = ' + newMecVentFan);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z14
	// if (typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	// 	newMecVentSystem = 0;
	// 	for (xxx in MECHANICALINFORMATIONTABLE) if (MECHANICALINFORMATIONTABLE[xxx]['Mechanical Type'] == 'Vent System') newMecVentSystem+=MECHANICALINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newMecVentSystem = ' + newMecVentSystem);
	// 	}

	// DISABLED: BuildingMechanicalFee:Lookup:z15
	// newMecTotal = parseFloat(newMecACFurnace) + parseFloat(newMecRefrigUnit) + parseFloat(newMecApplVent) + parseFloat(newMecAirHandleUnits) + parseFloat(newMecBoilers) + parseFloat(newMecEvapCooler) + parseFloat(newMecExhaustHoodDuctRes) + parseFloat(newMecExhaustHoodDuctComT1) + parseFloat(newMecExhaustHoodDuctComT2) + parseFloat(newMecFloorFurnace) + parseFloat(newMecMoistExhaustDuct) + parseFloat(newMecUnitHeaters) + parseFloat(newMecVentFan) + parseFloat(newMecVentSystem);

}
