function getAppCalcValue() {
	// returns the calculated valuation
	// if a capId is sent then assign that to the variable, else use the capId of the current record
	if (arguments.length > 0)
		itemCap = arguments[0];
	else
		itemCap = capId;
	var appCalcValue = aa.finance.getCalculatedValuation(itemCap).getOutput();
	if (!appCalcValue) {
		logDebug("There is no value to return");
		return 0;
	} else {
		return appCalcValue;
	}

}
