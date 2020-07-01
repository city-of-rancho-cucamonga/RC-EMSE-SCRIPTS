function bldPlumbingFeeNoSplit() {

	newPlbTotal = 0;

	//replaced branch(BuildingPlumbingFee:Lookup)
	bldPlumbingFeeLookup();
	if (newPlbTotal == 0) {
		removeFee('PLMRESPLN', 'FINAL');
		removeFee('PLMRESINSP', 'FINAL');
	}

	if (newPlbTotal > 0) {
		removeFee('PLMRESPLN', 'FINAL');
		updateFee('PLMRESINSP', 'BLD_PLM_RES', 'FINAL', newPlbTotal*1.026*1.029 / .5, 'N');
	}

	if (!(feeExists('MI115') || feeExists('MI006'))) {
		updateFee('PLMRESTECH', 'BLD_PLM_RES', 'FINAL', newPlbTotal, 'N');
		updateFee('PLMRESGPMF', 'BLD_PLM_RES', 'FINAL', newPlbTotal, 'N');
	}

}
