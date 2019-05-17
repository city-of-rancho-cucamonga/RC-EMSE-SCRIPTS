
// DISABLED: FAA:Fire/District/Operating Permit/NA:01 - moved to FAA:Fire/*/*/*
// var feeRecTotal = 0;
// feeRecTotal = feeAmountExcept(capId,'FDROP1010','FDROP1020');
// comment('What is Fee Record Total $ ' + feeRecTotal);
// DISABLED: FAA:Fire/District/Operating Permit/NA:02
// if (AInfo['GENERAL INFORMATION.Fee Reduction'] == 'CHECKED') {
// 	var feeReduct = 'CHECKED';
//	} else {
// 	var feeReduct = 'UNCHECKED';
// 	}

// DISABLED: FAA:Fire/District/Operating Permit/NA:03
// var feeRedPC = lookup('FIREDIST:FEEREDUCTIONAMT',feeReduct);
// comment('What is Fee Reduction Percentage = ' + feeRedPC);
// DISABLED: FAA:Fire/District/Operating Permit/NA:04
// if (feeRecTotal > 0 && AInfo['GENERAL INFORMATION.Non-Profit Organization'] == 'Yes' && feeReduct == 'UNCHECKED') {
// 	updateFee('FDROP1020','FD_OPERATING','FINAL',feeRecTotal * .5 * -1,'N');
// 	}

// DISABLED: FAA:Fire/District/Operating Permit/NA:05
// if (feeRecTotal > 0 && AInfo['GENERAL INFORMATION.Non-Profit Organization'] == 'Yes' && feeReduct == 'CHECKED') {
// 	updateFee('FDROP1020','FD_OPERATING','FINAL',feeRecTotal * -1,'N');
// 	}

// DISABLED: FAA:Fire/District/Operating Permit/NA:06
// if (feeRecTotal > 0 && AInfo['GENERAL INFORMATION.Non-Profit Organization'] == 'No' && feeReduct == 'CHECKED') {
// 	updateFee('FDROP1020','FD_OPERATING','FINAL',(feeRecTotal * feeRedPC) * -1,'N');
// 	}

