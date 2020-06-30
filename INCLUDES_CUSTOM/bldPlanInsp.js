function bldPlanInsp() {

	newTotal = 0;
	if (typeof(AREAINFORMATION) == 'object') {
		for (eachrow in AREAINFORMATION)
			//start replaced branch: BuildingPlanInsp:Lookup
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
			// DISABLED: BuildingPlanInsp:Lookup:Z30
			// theFeeTable = 'BLDPlanInspFee2013';
			// DISABLED: BuildingPlanInsp:Lookup:z45
			// theRate = lookup('BldPlanInspRate','pcRate');
			// DISABLED: BuildingPlanInsp:Lookup:Z65
			// newTotal = newTotal +(parseFloat(theBase));
			// comment('what is newTotal = ' + newTotal);

		}
		//end replaced branch: BuildingPlanInsp:Lookup;
	}

	if (newTotal > 0) {
		updateFee('TI012', 'BLD_TI', 'FINAL', newTotal*1.026*1.029, 'N');
		updateFee('TI014', 'BLD_TI', 'FINAL', newTotal*1.026*1.029, 'N');
		updateFee('TI090', 'BLD_TI', 'FINAL', newTotal, 'N');
		updateFee('TI120', 'BLD_TI', 'FINAL', 1, 'N');
	}

	// DISABLED: BLDEMSEFee:BuildingPlanInsp:Z99
	// if (newTotal > 0) {
	// 	updateFee('TI010','BLD_TI','FINAL',newTotal*1.019*1.020*1.025*1.024*1.025,'N');
	// 	updateFee('TI020','BLD_TI','FINAL',newTotal*1.019*1.020*1.025*1.024*1.025,'N');
	// 	updateFee('TI090','BLD_TI','FINAL',newTotal,'N');
	// 	}

}
