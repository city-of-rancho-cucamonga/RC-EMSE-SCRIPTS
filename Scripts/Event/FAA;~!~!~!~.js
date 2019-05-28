
// DISABLED: FeeAssessAfter:06
// var feeRecTotal = 0;
// feeRecTotal = feeAmountExcept(capId,'FDROP1010','FDROP1020');
// comment('What is Fee Record Total $ ' + feeRecTotal);
// DISABLED: FeeAssessAfter:07
// if (AInfo['GENERAL INFORMATION.Fee Reduction'] == 'CHECKED') {
// 	var feeReduct = 'CHECKED';
//	} else {
// 	var feeReduct = 'UNCHECKED';
// 	}

// DISABLED: FeeAssessAfter:08
// var feeRedPC = lookup('FIREDIST:FEEREDUCTIONAMT',feeReduct);
// comment('What is Fee Reduction Percentage = ' + feeRedPC);
// DISABLED: FeeAssessAfter:09
// if (feeRecTotal > 0 && AInfo['GENERAL INFORMATION.Non-Profit Organization'] == 'Yes' && feeReduct == 'UNCHECKED') {
// 	updateFee('FDROP1020','FD_OPERATING','FINAL',feeRecTotal * .5 * -1,'N');
// 	}

// DISABLED: FeeAssessAfter:10
// if (feeRecTotal > 0 && AInfo['GENERAL INFORMATION.Non-Profit Organization'] == 'Yes' && feeReduct == 'CHECKED') {
// 	updateFee('FDROP1020','FD_OPERATING','FINAL',feeRecTotal * -1,'N');
// 	}

