function doesRealAddressExistOnCap() {
	var itemCap = capId;
	if (arguments.length == 1)
		itemCap = arguments[0]; // use cap ID specified in args

	var addrArray = new Array();
	var capAddResult = aa.address.getAddressByCapId(capId);
	if (capAddResult.getSuccess())
		var addrArray = capAddResult.getOutput();
	else {
		logDebug("**ERROR: Failed to get Address object: " + capAddResult.getErrorType() + ":" + capAddResult.getErrorMessage());
		return false;
	}

	if (addrArray == undefined || addrArray.length == 0)
		return false;
	for (i in addrArray) {
		thisAddr = addrArray[i];
		if (thisAddr.getStreetName() != null)
			return true;
	}
	return false;

}
