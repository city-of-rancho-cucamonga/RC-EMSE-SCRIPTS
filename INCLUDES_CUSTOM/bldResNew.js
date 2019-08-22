function bldResNew() {

	newTotal = 0;
	if (typeof(AREAINFORMATION) == 'object') {
		for (eachrow in AREAINFORMATION)
			//start replaced branch: BuildingResNew:Lookup
		{
			feeRow = AREAINFORMATION[eachrow];
			var theBase = 0;
			var theAddOn = 0;
			theValue = feeRow['IBC Occupancy Type'];
			theFeeTable = 'BLDPlanInspFeeSchedule';
			theBase = lookupFeesByValuationSlidingScale(theFeeTable, theValue, parseInt(feeRow['Area Square Footage']));
			theAddOn = lookupFeesByValuationSlidingScale(theFeeTable, theValue, parseInt(feeRow['Area Square Footage']), 2);
			newTotal = newTotal + (parseFloat(theBase) + parseFloat(theAddOn));
			comment('what is newTotal = ' + newTotal);
			// DISABLED: BuildingResNew:Lookup:z02
			// theValue = feeRow['IBC Class'] + '-' + feeRow['IBC Occupancy Type'];
			// DISABLED: BuildingResNew:Lookup:z03
			// theFeeTable = 'BLDResNew_Fee2013';

		}
		//end replaced branch: BuildingResNew:Lookup;
	}

	if (newTotal > 0) {
		updateFee('TI012', 'BLD_TI', 'FINAL', newTotal*.1.026, 'N');
		updateFee('TI014', 'BLD_TI', 'FINAL', newTotal*1.026, 'N');
		updateFee('TI090', 'BLD_TI', 'FINAL', newTotal, 'N');
		updateFee('TI120', 'BLD_TI', 'FINAL', 1, 'N');
	}

	// DISABLED: BLDEMSEFee:BuildingResNew:z03
	// if (newTotal > 0) {
	// 	updateFee('TI010','BLD_TI','FINAL',newTotal*1.019*1.020*1.025*1.024*1.025,'N');
	// 	updateFee('TI020','BLD_TI','FINAL',newTotal*1.019*1.020*1.025*1.024*1.025,'N');
	// 	updateFee('TI090','BLD_TI','FINAL',newTotal,'N');
	// 	}

}
