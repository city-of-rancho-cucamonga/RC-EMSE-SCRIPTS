function makeAltIDByMatchingASI(ASIName, ASIValue) {
	// if a capId is sent then assign that to the variable, else use the capId of the current record
	if (arguments.length > 2)
		itemCap = arguments[2];
	else
		itemCap = capId;

	// Get the number from the ASI and use the number to find all the records that begin with the BL#
	var getCapResult = aa.cap.getCapIDsByAppSpecificInfoField(ASIName, ASIValue);
	if (getCapResult.getSuccess())
		var apsArray = getCapResult.getOutput();
	else {
		logDebug("**ERROR: getting caps by app type: " + getCapResult.getErrorMessage());
		return null
	}

	// Get the length to determine the next sequence number
	var numberForSequence = 0;
	numberForSequence = apsArray.length;
	if (numberForSequence == 0) {
		numberForSequence = "001";
	} else if (numberForSequence < 10) {
		numberForSequence = "00" + numberForSequence;
	} else if (numberForSequence < 100) {
		numberForSequence = "0" + numberForSequence;
	} else {
		numberForSequence = numberForSequence;
	}

	var newAltID;
	newAltID = "BL" + ASIValue + "-" + numberForSequence;

	// update the existing record with the new number
	if (newAltID != "") {
		editResult = aa.cap.updateCapAltID(itemCap, newAltID);
		if (editResult.getSuccess())
			logDebug("Successfully modified altID to " + newAltID);
		else
			logDebug("Modification of altID failed : " + editResult.getErrorMessage());
	}
} // End of Script # 109
