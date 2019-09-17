function priAddressOnCap()
{
        // Prototype function to return Primary (or only) address as a string
	// Optional parameter, cap ID to load from
	//

	var itemCap = capId;
	if (arguments.length == 1) itemCap = arguments[0]; // use cap ID specified in args

	var fcapAddressObj = null;
	var capAddResult = aa.address.getAddressByCapId(capId);
	if (capAddResult.getSuccess())
		var fcapAddressObj = capAddResult.getOutput();
	else
		{ logDebug("**ERROR: Failed to get Address object: " + capAddResult.getErrorType() + ":" + capAddResult.getErrorMessage()); return false; }

	for (i in fcapAddressObj) {
             if (fcapAddressObj.length > 1) {
             //check for primary
                  if (thisAddr.getPrimaryFlag() != 'Y') { 
                       //not primary, skip 
                       continue; 
                  }
             }
             thisAddr = fcapAddressObj[i];		
             return thisAddr + "";
	}
	return false;
}
