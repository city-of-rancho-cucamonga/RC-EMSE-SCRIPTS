function getSumFromASIT(theASITable, theASITField) {
	// This function will return the sum of a field in an array. The array is built from theASITDateField from theASITable specified.
	// It returns an int

	// if a capId is sent then assign that to the variable, else use the capId of the current record
	if (arguments.length > 2)
		itemCap = arguments[2];
	else
		itemCap = capId;
	var theSum = 0;
	myTempTable = loadASITable(theASITable, itemCap);
	if (myTempTable.length > 0) {
		for (item in myTempTable) {
			var aRow = myTempTable[item];
			for (x in aRow) {
				if (x == theASITField) {
					theSum = theSum + parseInt(aRow[x]);
				}
			}

		}
	} else {
		// return the date to update the ASI
		logDebug("There are no rows in the ASIT")
		return 0;
	}

	return theSum;

} // end getSumFromASIT
