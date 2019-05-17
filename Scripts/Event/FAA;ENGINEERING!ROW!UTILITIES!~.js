
if (feeExists('ROWU160','NEW') && typeof(WORKITEMS) == 'object') {
	var totalFeeAmt = 0;
	for(xxx in WORKITEMS) totalFeeAmt = totalFeeAmt + parseFloat(WORKITEMS[xxx]['Permit Fee']);
	removeFee('ROWU160','FINAL');
	if (totalFeeAmt>0) updateFee('ROWU160','ENG_ROW_UTIL','FINAL',totalFeeAmt,'N');
	}

