function makeAltIDByAddress() {
	if (arguments.length > 0)
		itemCap = arguments[0];
	else
		itemCap = capId;

	var addrArray = new Array();
	var capAddResult = aa.address.getAddressByCapId(itemCap);
	if (capAddResult.getSuccess())
		var addrArray = capAddResult.getOutput();
	else {
		logDebug("**ERROR: Failed to get Address object: " + capAddResult.getErrorType() + ":" + capAddResult.getErrorMessage());
		return false;
	}

	useThisAddr = null;
	if (addrArray && addrArray.length > 0) {
		for (i in addrArray) {
			thisAddr = addrArray[i];
			if (thisAddr.getPrimaryFlag() == "Y") {
				useThisAddr = thisAddr;
			}
		}
		if (useThisAddr == null)
			useThisAddr = addrArray[0];
	}

	if (useThisAddr == null) {
		logDebug("No address - cannot modify altID");
		return;
	}
	strName = "" + useThisAddr.getStreetName();
	strName = strName.replace(/ /g, "");
	addrString = strName.substring(0, 4).toUpperCase();
	addrString += "" + useThisAddr.getHouseNumberStart();
	unitStart = "" + useThisAddr.getUnitStart();
	if (unitStart != "null" && unitStart != "")
		addrString += "-" + unitStart.toUpperCase();
	numbertoUse = 1;
	relatedCapIdArray = getRelatedCapsByThisAddress(useThisAddr.getStreetName(), useThisAddr.getHouseNumberStart(), useThisAddr.getStreetSuffix(),
			useThisAddr.getStreetDirection(), "Fire/District/Site Info/NA", itemCap);
	if (relatedCapIdArray && relatedCapIdArray.length > 0) {
		// standard function getRelatedCapsByAddress doesn't take into account unit, need to filter...
		relatedCapIdArray = filterRelatedCapsByAddressUnit(relatedCapIdArray, useThisAddr.getUnitStart());
		for (var i in relatedCapIdArray) {
			relCapID = relatedCapIdArray[i];
			logDebug("Related record : " + relCapID.getCustomID());
		}
		numbertoUse = relatedCapIdArray.length + 1;
	}
	if (numbertoUse < 10)
		numbertoUse = "0" + numbertoUse;
	else
		numbertoUse = "" + numbertoUse;

	newAltID = numbertoUse + addrString;
	if (newAltID != "") {
		editResult = aa.cap.updateCapAltID(itemCap, newAltID);
		if (editResult.getSuccess())
			logDebug("Successfully modified altID to " + newAltID);
		else
			logDebug("Modification of altID failed : " + editResult.getErrorMessage());
	}
}
