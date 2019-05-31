function filterRelatedCapsByAddressUnit(relCapIdArray, unitStart) {

	retArray = new Array();
	for (cIndex in relCapIdArray) {
		relCapID = relCapIdArray[cIndex];
		relCapAddrResult = aa.address.getAddressByCapId(relCapID.getCapID());
		if (relCapAddrResult.getSuccess()) {
			var relCapAddrArray = relCapAddrResult.getOutput();
			var useThisRelAddr = null;
			if (relCapAddrArray && relCapAddrArray.length > 0) {
				for (var ri in relCapAddrArray) {
					thisRelAddr = relCapAddrArray[ri];
					if (thisRelAddr.getPrimaryFlag() == 'Y') {
						useThisRelAddr = thisRelAddr;
						break;
					}
				}
				if (useThisRelAddr == null)
					useThisRelAddr = relCapAddrArray[0];
			}
			if (useThisRelAddr != null) {
				thisRelAddrUnit = useThisRelAddr.getUnitStart();
				if (thisRelAddrUnit == unitStart)
					retArray.push(relCapID);
			}
		} else {
			logDebug("Error getting address on related record");
		}
	}
	return retArray;
}
