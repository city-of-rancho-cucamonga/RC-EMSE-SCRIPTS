function getRelatedCapsByThisAddress(strName, strNo, strSuffix, strDir, ats) {
	var retArr = new Array();
	itemCap = capId;
	if (arguments.length > 5)
		itemCap = arguments[5];
	// get caps with same address
	capAddResult = aa.cap.getCapListByDetailAddress(strName, strNo, strSuffix, null, strDir, null);
	if (capAddResult.getSuccess()) {
		var capIdArray = capAddResult.getOutput();
		for (cappy in capIdArray) {
			if (itemCap.getCustomID().equals(capIdArray[cappy].getCustomID())) {
				continue;
			}
			var relcap = aa.cap.getCap(capIdArray[cappy].getCapID()).getOutput();
			var reltypeArray = relcap.getCapType().toString().split("/");
			var isMatch = true;
			var ata = ats.split("/");
			if (ata.length != 4)
				logDebug("**ERROR: The following Application Type String is incorrectly formatted: " + ats);
			else
				for (xx in ata)
					if (!ata[xx].equals(reltypeArray[xx]) && !ata[xx].equals("*"))
						isMatch = false;
			if (isMatch) {
				retArr.push(capIdArray[cappy]);
			}
		} // loop through related caps
	} else {
		logDebug("**ERROR: getting similar addresses: " + capAddResult.getErrorMessage());
		return false;
	}
	return retArr;
}
