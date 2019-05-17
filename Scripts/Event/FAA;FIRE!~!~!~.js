
var feeRecTotal = 0;
feeRecTotal = feeAmountExcept(capId,'FDROP1010','FDROP1020');
comment('What is Fee Record Total $ ' + feeRecTotal);
if (AInfo['GENERAL INFORMATION.Fee Reduction'] == 'CHECKED') {
	var feeReduct = 'CHECKED';
	} else {
	var feeReduct = 'UNCHECKED';
	}

var feeRedPC = lookup('FIREDIST:FEEREDUCTIONAMT',feeReduct);
comment('What is Fee Reduction Percentage = ' + feeRedPC);
var feeNonProfit = 0;
var feeReductPCTot = 0;
var feeReductNPTot = 0;
if (AInfo['GENERAL INFORMATION.Non-Profit Organization'] == 'Yes') {
	feeNonProfit = .5;
	}

feeReductNPTot = (parseFloat(feeRecTotal) - parseFloat(feeReductPCTot)) * feeNonProfit;
comment('What is feeReductNPTot = ' + feeReductNPTot);
feeReductPCTot = Math.abs((feeRecTotal * feeRedPC) - feeReductNPTot);
comment('What is feeReductPCTot = ' + feeReductPCTot);
if (feeRedPC == '1' && AInfo['GENERAL INFORMATION.Non-Profit Organization'] == 'Yes') {
	updateFee('FDROP1020','FD_OPERATING','FINAL',feeReductPCTot,'N');
	updateFee('FDROP1030','FD_OPERATING','FINAL',feeReductNPTot,'N');
	}

if (feeNonProfit != 0) {
	updateFee('FDROP1030','FD_OPERATING','FINAL',feeReductNPTot,'N');
	}

if (feeRedPC == '1') {
	updateFee('FDROP1020','FD_OPERATING','FINAL',feeReductPCTot,'N');
	}

// DISABLED: FAA:Fire/*/*/*:NOTUSE1
// if (feeRedPC > 0 && feeRedPC < 1) {
// 	feeReductPCTot = feeRecTotal * feeRedPC;
// 	comment('What is feeReductPCTot = ' + feeReductPCTot);
// 	}

// DISABLED: FAA:Fire/*/*/*:NOTUSE2
// feeReductNPTot = (parseFloat(feeRecTotal) - parseFloat(feeReductPCTot)) * feeNonProfit;
// comment('What is feeReductNPTot = ' + feeReductNPTot);
// DISABLED: FAA:Fire/*/*/*:NOTUSE3
// if (feeRedPC == '1') {
// 	updateFee('FDROP1020','FD_OPERATING','FINAL',feeRecTotal * -1,'N');
// 	}

// DISABLED: FAA:Fire/*/*/*:NOTUSE4
// if (feeRedPC > 0 && feeRedPC < 1 && feeNonProfit == 0) {
// 	updateFee('FDROP1020','FD_OPERATING','FINAL',feeReductPCTot * -1,'N');
// 	}

// DISABLED: FAA:Fire/*/*/*:NOTUSE5
// if (feeRedPC > 0 && feeRedPC < 1 && feeNonProfit > 0) {
// 	updateFee('FDROP1020','FD_OPERATING','FINAL',(parseFloat(feeReductPCTot) + parseFloat(feeReductNPTot)) * -1,'N');
// 	}

// DISABLED: FAA:Fire/*/*/*:NOTUSE6
// if (feeRedPC == '0' && feeNonProfit > 0) {
// 	updateFee('FDROP1020','FD_OPERATING','FINAL',(parseFloat(feeReductPCTot) + parseFloat(feeReductNPTot)) * -1,'N');
// 	}

