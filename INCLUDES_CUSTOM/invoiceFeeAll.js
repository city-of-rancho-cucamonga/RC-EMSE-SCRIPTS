function invoiceFeeAll(itemCap) {
	//invoices all assessed fees with a status of NEW
	var itemCap = capId
		if (arguments.length > 1)
			itemCap = arguments[1]; // use cap ID specified in argsvar
		getFeeResult = new Array();
	getFeeResult = aa.fee.getFeeItems(itemCap);
	if (getFeeResult.getSuccess()) {
		var feeList = getFeeResult.getOutput();
		for (feeNum in feeList)
			if (feeList[feeNum].getFeeitemStatus().equals("NEW")) {
				var feeSeq = feeList[feeNum].getFeeSeqNbr();
				var fperiod = feeList[feeNum].getPaymentPeriod();
				feeSeqList.push(feeSeq);
				paymentPeriodList.push(fperiod);
			}
		invoiceResult = aa.finance.createInvoice(itemCap, feeSeqList, paymentPeriodList);
		if (invoiceResult.getSuccess())
			logMessage("Invoicing assessed fee items is successful.");
		else
			logMessage("**ERROR: Invoicing the fee items assessed to app # " + altId + " was not successful.  Reason: " + invoiceResult.getErrorMessage());
	}
}
