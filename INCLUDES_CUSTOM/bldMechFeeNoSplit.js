function bldMechFeeNoSplit() {

	newMecTotal = 0;

	//replaced branch(BuildingMechanicalFee:Lookup)
	bldMechFeeLookup();
	if (newMecTotal == 0) {
		removeFee('MECHRESPLN', 'FINAL');
		removeFee('MECHRESINSP', 'FINAL');
	}

	if (newMecTotal > 0) {
		removeFee('MECHRESPLN', 'FINAL');
		updateFee('MECHRESINSP', 'BLD_MECH_RES', 'FINAL', newMecTotal*1.026*1.029*1.023 / .5, 'N');
	}

	if (!(feeExists('MI115') || feeExists('MI006'))) {
		updateFee('MECHRESTECH', 'BLD_MECH_RES', 'FINAL', newMecTotal, 'N');
		updateFee('MECHRESGPMF', 'BLD_MECH_RES', 'FINAL', newMecTotal, 'N');
	}

	// DISABLED: BLDEMSEFee:MechanicalFeeNoSplit:z50
	// if (newMecTotal > 0) {
	// 	removeFee('MECHRESPLN','FINAL');
	// 	updateFee('MECHINSP','BLD_MECH_RES','FINAL',newMecTotal,'N');
	// 	}

}