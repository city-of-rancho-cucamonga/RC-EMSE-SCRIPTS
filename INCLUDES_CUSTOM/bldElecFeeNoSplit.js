function bldElecFeeNoSplit() {

	newEleTotal = 0;

	//replaced branch(BuildingElectricalFee:Lookup)
	bldElecFeeLookup();
	if (newEleTotal == 0) {
		removeFee('ELERESPLN', 'FINAL');
		removeFee('ELERESINSP', 'FINAL');
	}

	if (newEleTotal > 0) {
		removeFee('ELERESPLN', 'FINAL');
		updateFee('ELERESINSP', 'BLD_ELE_RES', 'FINAL', newEleTotal / .5, 'N');
		comment('what is newEleTotal = ' + newEleTotal);
		comment('This is a no split-the formula divided by .5 because Fee Schedule multiplied by .5');
	}

	if (!(feeExists('MI115') || feeExists('MI006'))) {
		updateFee('ELERESGPMF', 'BLD_ELE_RES', 'FINAL', newEleTotal, 'N');
		updateFee('ELERESTECH', 'BLD_ELE_RES', 'FINAL', newEleTotal, 'N');
	}

	// DISABLED: BLDEMSEFee:ElectricalFeeNoSplit:z50
	// if (newEleTotal > 0) {
	// 	removeFee('ELERESPLN','FINAL');
	// 	updateFee('ELERESINSP','BLD_ELE_RES','FINAL',newEleTotal*1.019*1.020*1.025*1.024*1.025/.43,'N');
	// 	comment('what is newEleTotal = ' + newEleTotal*1.019*1.020*1.025*1.024*1.025);
	// 	comment ('This is a no split-the formula divided by .43 because Fee Schedule multiplied by .43');
	// 	}

}
