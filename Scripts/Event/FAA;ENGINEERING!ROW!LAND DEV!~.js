
if (feeExists('ROWLD010', 'NEW') && typeof(WORKITEMS) == 'object') {
	var totalFeeAmt = 0;
	for (xxx in WORKITEMS)
		totalFeeAmt = totalFeeAmt + parseFloat(WORKITEMS[xxx]['Permit Fee']);
	removeFee('ROWLD010', 'FINAL');
	if (totalFeeAmt > 0)
		updateFee('ROWLD010', 'ENG_ROW_LD', 'FINAL', totalFeeAmt, 'N');
}
