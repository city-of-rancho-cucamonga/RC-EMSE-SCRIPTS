function feeBalanceByRecord() // option CapId
{
	//  load the fees into an array of objects.  Does not
	var itemCap = capId
		if (arguments.length > 0) {
			ltcapidstr = arguments[0]; // use cap ID specified in args
			if (typeof(ltcapidstr) == "string") {
				var ltresult = aa.cap.getCapID(ltcapidstr);
				if (ltresult.getSuccess())
					itemCap = ltresult.getOutput();
				else {
					logMessage("**ERROR: Failed to get cap ID: " + ltcapidstr + " error: " + ltresult.getErrorMessage());
					return false;
				}
			} else
				itemCap = ltcapidstr;
		}

		var amtFee = 0;
	var amtPaid = 0;

	var feeResult = aa.fee.getFeeItems(itemCap);
	if (feeResult.getSuccess()) {
		var feeObjArr = feeResult.getOutput();
	} else {
		logDebug("**ERROR: getting fee items: " + capContResult.getErrorMessage());
		return false
	}

	for (ff in feeObjArr) {
		amtFee += feeObjArr[ff].getFee();
		var pfResult = aa.finance.getPaymentFeeItems(itemCap, null);
		if (pfResult.getSuccess()) {
			var pfObj = pfResult.getOutput();
			for (ij in pfObj)
				if (feeObjArr[ff].getFeeSeqNbr() == pfObj[ij].getFeeSeqNbr())
					amtPaid += pfObj[ij].getFeeAllocation()
		}
	}
	return amtFee - amtPaid;
}
