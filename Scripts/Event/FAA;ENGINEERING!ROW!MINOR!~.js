
if (feeExists('ROWM150','NEW') && typeof(WORKITEMS) == 'object') {
	var totalFeeAmt = 0;
	for(xxx in WORKITEMS) totalFeeAmt = totalFeeAmt + parseFloat(WORKITEMS[xxx]['Permit Fee']);
	removeFee('ROWM150','FINAL');
	if (totalFeeAmt>0) updateFee('ROWM150','ENG_ROW_MNR','FINAL',totalFeeAmt,'N');
	}

