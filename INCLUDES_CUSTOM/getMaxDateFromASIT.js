function getMaxDateFromASIT(theASITable, theASITDateField) {
	// This function will return the maximum value of an array. The array is built from theASITDateField from theASITable specified.
	// It returns a string value
	// if a capId is sent then assign that to the variable, else use the capId of the current record
	if (arguments.length > 2)
		itemCap = arguments[2];
	else
		itemCap = capId;

	var theDates = [];
	myTempDateTable = loadASITable(theASITable, itemCap);
	if (myTempDateTable.length > 0) {
		for (x in myTempDateTable) {
			var aRow = myTempDateTable[x];
			theDates.push(aRow[theASITDateField]);
		}
	} else {
		// return the date to update the ASI
		logDebug("There are no rows in the ASIT");
	}

	var theMaxDate = maxDate(theDates);
	return theMaxDate;
}