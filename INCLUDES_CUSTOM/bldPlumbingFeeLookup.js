function bldPlumbingFeeLookup() {

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Utility Connection')
				newPlbTotal += PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 138;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Plumbing or gas fixtures' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] < 6)
				newPlbTotal += 394;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Plumbing or gas fixtures' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] > 5)
				newPlbTotal += (Math.ceil(((PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 1) - 5)) * 164.00) + 394.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Private sewage disposal system- commercial')
				newPlbTotal += PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 394;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Repair drain line, sewer line, water service or gas line- commercial')
				newPlbTotal += PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 262;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Tankless water heater - commercial')
				newPlbTotal += PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 328;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Solar water system - commercial')
				newPlbTotal += PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 787;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Medical Gas system')
				newPlbTotal += PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 951;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Sewer / Water Service Connection')
				newPlbTotal += (PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 1) * 164.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Plumbing or Gas Fixtures' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] < 6)
				newPlbTotal += 197.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Plumbing or Gas Fixtures' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] > 5)
				newPlbTotal += (Math.ceil(((PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 1) - 5)) * 33.00) + 197.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Re-piping up to 20 Fixtures')
				newPlbTotal += 262.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water Service Line')
				newPlbTotal += (PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 1) * 164.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Backflow Preventer' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] < 6)
				newPlbTotal += 197.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Backflow Preventer' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] > 5)
				newPlbTotal += (Math.ceil(((PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 1) - 5)) * 13.00) + 197.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water Heater')
				newPlbTotal += (PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 1) * 131.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Tankless Water Heater')
				newPlbTotal += (PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 1) * 197.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Graywater System')
				newPlbTotal += (PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 1) * 131.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Repair - Drain Line, Sewer Line, Water Service, or Gas Line')
				newPlbTotal += (PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 1) * 131.00;
	}

	if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
		for (xxx in PLUMBINGINFORMATIONTABLE)
			if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Septic System Abandonment')
				newPlbTotal += (PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 1) * 277.00;
	}

	// DISABLED: BuildingPlumbingFee:Lookup:z01
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmBackPrevent = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Backflow Preventer') newPlmBackPrevent+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 126.89;
	// 	comment('What is newPlmBackPrevent = ' + newPlmBackPrevent);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z02
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmDrainVent = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Drain - Vent Repair/Alterations') newPlmDrainVent+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newPlmDrainVent = ' + newPlmDrainVent);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z03
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmBldgSewer = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Building Sewer') newPlmBldgSewer+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 126.89;
	// 	comment('What is newPlmBldgSewer = ' + newPlmBldgSewer);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z04
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmGasSysOutlet1 = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Gas System Outlets' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] > 0) newPlmGasSysOutlet1 = 95.17;
	// 	comment('What is newPlmGasSysOutlet1 = ' + newPlmGasSysOutlet1);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z05
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmGasSysOutlet2 = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Gas System Outlets' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] > 4) newPlmGasSysOutlet2+=(PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] -4 ) * 63.44;
	// 	comment('What is newPlmGasSysOutlet2 = ' + newPlmGasSysOutlet2);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z06
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmGraywater = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Graywater System (Hourly) ') newPlmGraywater+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 158.61;
	// 	comment('What is newPlmGraywater = ' + newPlmGraywater);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z07
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmGreaseIncept = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Grease Inceptor') newPlmGreaseIncept+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newPlmGreaseIncept = ' + newPlmGreaseIncept);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z08
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmGreaseTrap = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Grease Trap') newPlmGreaseTrap+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newPlmGreaseTrap = ' + newPlmGreaseTrap);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z09
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmLawnSprinkSys = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Lawn Sprinklers System') newPlmLawnSprinkSys+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 126.89;
	// 	comment('What is newPlmLawnSprinkSys = ' + newPlmLawnSprinkSys);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z10
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmMedGasSysOutlet = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Medical Gas System Outlets') newPlmMedGasSysOutlet+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newPlmMedGasSysOutlet = ' + newPlmMedGasSysOutlet);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z11
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmPlmFixtures = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Plumbing Fixtures') newPlmPlmFixtures+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newPlmPlmFixtures = ' + newPlmPlmFixtures);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z12
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmPrivSewDispSys = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Private Sewage Disposal System') newPlmPrivSewDispSys+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 222.05;
	// 	comment('What is newPlmPrivSewDispSys = ' + newPlmPrivSewDispSys);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z13
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmRoofDrnRainWtr = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Roof Drain - Rainwater System') newPlmRoofDrnRainWtr+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newPlmRoofDrnRainWtr = ' + newPlmRoofDrnRainWtr);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z14
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmSolWtrSysFix = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Solar Water System Fixtures') newPlmSolWtrSysFix+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 190.33;
	// 	comment('What is newPlmSolWtrSysFix = ' + newPlmSolWtrSysFix);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z15
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmTanklWtrHeat = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Tankless Water Heater') newPlmTanklWtrHeat+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 63.44;
	// 	comment('What is newPlmTanklWtrHeat = ' + newPlmTanklWtrHeat);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z16
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmWtrHeatVent = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water Heater and/or Vent') newPlmWtrHeatVent+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newPlmWtrHeatVent = ' + newPlmWtrHeatVent);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z17
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmWtrPipeRpr = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water Pipe Repair/Replacement') newPlmWtrPipeRpr+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 95.17;
	// 	comment('What is newPlmWtrPipeRpr = ' + newPlmWtrPipeRpr);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z18
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmWtrPipeFix = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water Piping Fixtures' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] <= 5) newPlmWtrPipeFix = 95.17;
	// 	comment('What is newPlmWtrPipeFix = ' + newPlmWtrPipeFix);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z19
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmWtrPipeFix6 = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water Piping Fixtures' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] >= 6) newPlmWtrPipeFix6+=(PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] - 5) * 95.17;
	// 	comment('What is newPlmWtrPipeFix6 = ' + newPlmWtrPipeFix6);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z19.2
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPrivateWaterSewer1 = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Private Street Improvement - Water and Sewer 1 to 50 lots' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] <= 10) newPrivateWaterSewer1 = 253.78;
	// 	comment('What is newPrivateWaterSewer1 = ' + newPrivateWaterSewer1);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z19.3
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPrivateWaterSewer2 = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Private Street Improvement - Water and Sewer 1 to 50 lots' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] > 10) newPrivateWaterSewer2 = 887.08;
	// 	comment('What is newPrivateWaterSewer2 = ' + newPrivateWaterSewer2);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z19.4
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newWaterSewer1 = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water and Sewer (retail, commercial, and industrial)' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] <= 5) newWaterSewer1 = 253.78;
	// 	comment('What is newWaterSewer1 = ' + newWaterSewer1);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z19.5
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newWaterSewer2 = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water and Sewer (retail, commercial, and industrial)' && PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] > 5) newWaterSewer2 = 793.06;
	// 	comment('What is newWaterSewer2 = ' + newWaterSewer2);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z19.8
	// if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	// 	newPlmTempUtilRel = 0;
	// 	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Temporary Utility Release') newPlmTempUtilRel+=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 127;
	// 	comment('What is newPlmTempUtilRel = ' + newPlmTempUtilRel);
	// 	}

	// DISABLED: BuildingPlumbingFee:Lookup:z20 (not used)
	// newPlbTotal = parseFloat(newPlmBackPrevent) + parseFloat(newPlmDrainVent) + parseFloat(newPlmBldgSewer) + parseFloat(newPlmGasSysOutlet1) + parseFloat(newPlmGasSysOutlet2) + parseFloat(newPlmGreaseIncept) + parseFloat(newPlmGreaseTrap) + parseFloat(newPlmLawnSprinkSys)  + parseFloat(newPlmMedGasSysOutlet) + parseFloat(newPlmPlmFixtures) + parseFloat(newPlmPrivSewDispSys) + parseFloat(newPlmRoofDrnRainWtr) + parseFloat(newPlmSolWtrSysFix) + parseFloat(newPlmTanklWtrHeat) + parseFloat(newPlmWtrHeatVent) + parseFloat(newPlmWtrPipeRpr) + parseFloat(newPlmWtrPipeFix) + parseFloat(newPlmWtrPipeFix6);
	// DISABLED: BuildingPlumbingFee:Lookup:z21
	// newPlbTotal = parseFloat(newPlmBackPrevent) + parseFloat(newPlmDrainVent) + parseFloat(newPlmBldgSewer) + parseFloat(newPlmGasSysOutlet1) + parseFloat(newPlmGasSysOutlet2) + parseFloat(newPlmGreaseIncept) + parseFloat(newPlmGreaseTrap) + parseFloat(newPlmLawnSprinkSys)  + parseFloat(newPlmMedGasSysOutlet) + parseFloat(newPlmPlmFixtures) + parseFloat(newPlmPrivSewDispSys) + parseFloat(newPlmRoofDrnRainWtr) + parseFloat(newPlmSolWtrSysFix) + parseFloat(newPlmTanklWtrHeat) + parseFloat(newPlmWtrHeatVent) + parseFloat(newPlmWtrPipeRpr) + parseFloat(newPlmWtrPipeFix) + parseFloat(newPlmWtrPipeFix6) + parseFloat(newPlmTempUtilRel) + parseFloat(newWaterSewer1) + parseFloat(newWaterSewer2) + parseFloat(newPrivateWaterSewer1) + parseFloat(newPrivateWaterSewer2);

}
