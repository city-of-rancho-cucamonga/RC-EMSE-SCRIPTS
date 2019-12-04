if (feeExists('STR010', 'NEW') && typeof(WORKITEMS) == 'object') {
	var totalFeeAmt = 0;
	for (xxx in WORKITEMS)
		totalFeeAmt = totalFeeAmt + parseFloat(WORKITEMS[xxx]['Permit Fee']);
	removeFee('STR010', 'FINAL');
	if (totalFeeAmt > 0)
		updateFee('STR010', 'ENG_STR', 'FINAL', totalFeeAmt, 'N');
}