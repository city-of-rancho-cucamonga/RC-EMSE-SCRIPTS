function fdFeeNonProfitReduction() {

	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:01
	// var feeRecTotal = 0;
	// feeRecTotal = feeAmountExcept(capId,'FDROP1010','FDROP1020','FD220','FD230','FD240');
	// comment('What is Fee Record Total $ ' + feeRecTotal);
	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:02
	// if (AInfo['GENERAL INFORMATION.Fee Reduction'] == 'CHECKED') {
	// 	var feeReduct = 'CHECKED';
	//	} else {
	// 	var feeReduct = 'UNCHECKED';
	// 	}

	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:03
	// var feeRedPC = lookup('FIREDIST:FEEREDUCTIONAMT',feeReduct);
	// comment('What is Fee Reduction Percentage = ' + feeRedPC);
	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:04
	// var feeNonProfit = 0;
	// var feeReductPCTot = 0;
	// var feeReductNPTot = 0;
	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:05
	// if (matches(AInfo['GENERAL INFORMATION.Non-Profit Organization'],'Yes','Y')) {
	// 	feeNonProfit = .5;
	// 	}

	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:06
	// if (feeRecTotal > 0 && feeNonProfit  > 0) {
	// 	feeReductNPTot = feeRecTotal * feeNonProfit;
	// 	comment('What is feeReductNPTot = ' + feeReductNPTot);
	// 	}

	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:07
	// if (feeRecTotal > 0 && feeNonProfit > 0 && feeRedPC > 0) {
	// 	feeReductPCTot = feeReductNPTot * feeRedPC;
	// 	comment('What is feeReductPCTot = ' + feeReductPCTot);
	// 	}

	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:08
	// if (feeRecTotal > 0 && feeNonProfit == 0 && feeRedPC > 0) {
	// 	feeReductPCTot = feeRecTotal * feeRedPC;
	// 	comment('What is feeReductPCTot = ' + feeReductPCTot);
	// 	}

	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:09
	// if (feeReductNPTot > 0 && appTypeArray[2] == 'Operating Permit') {
	// 	updateFee('FDROP1030','FD_OPERATING','FINAL',feeReductNPTot * -1,'N');
	// 	}

	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:10
	// if (feeReductNPTot > 0 && appTypeArray[2] == 'Field Inspection Report') {
	// 	updateFee('FD250','FD_FLDINSP','FINAL',feeReductNPTot * -1,'N');
	// 	}

	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:11
	// if (feeReductPCTot > 0 && appTypeArray[2] == 'Operating Permit') {
	// 	updateFee('FDROP1020','FD_OPERATING','FINAL',feeReductPCTot * -1,'N');
	// 	}

	// DISABLED: FD:EMSE:FEENONPROFITREDUCTION:12
	// if (feeReductPCTot > 0 && appTypeArray[2] == 'Field Inspection Report') {
	// 	updateFee('FD240','FD_FLDINSP','FINAL',feeReductPCTot * -1,'N');
	// 	}

}
