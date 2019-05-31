function UpdateLicense(expDate, accNum, rlpId, rlpType) {
	logDebug("DEBUG>> Inside UpdateLicense funct");

	logDebug("DEBUG>> expDate: " + expDate);
	logDebug("DEBUG>> : accNum: " + accNum);
	logDebug("DEBUG>> : rlpId: " + rlpId);
	logDebug("DEBUG>> : rlpType: " + rlpType);

	var isAdd = true;
	var newLic = null;
	var myResult = null;

	var refLicenseResult = aa.licenseScript.getRefLicensesProfByLicNbr(aa.getServiceProviderCode(), rlpId);
	if (!refLicenseResult.getSuccess()) {
		logDebug("**ERROR retrieving Ref Lic Profs : " + refLicenseResult.getErrorMessage());
		return false;
	} else {
		var newLicArray = refLicenseResult.getOutput();
		if (!newLicArray) {
			logDebug("DEBUG>> refLicenseResult.getOutput returned nothing.  Return null.");
			return null;
		}

		for (var thisLic in newLicArray)
			if (rlpId && newLicArray[thisLic] && rlpId.toUpperCase().equals(newLicArray[thisLic].getStateLicense().toUpperCase())) {
				isAdd = false;
				newLic = newLicArray[thisLic];

				newLic.setBusinessLicense(accNum);
				newLic.setBusinessLicExpDate(aa.date.parseDate(expDate));
				myResult = aa.licenseScript.editRefLicenseProf(newLic);
				if (myResult.getSuccess()) {
					logDebug("Successfully updated License No. " + rlpId + ", Type: " + rlpType);
					logMessage("Successfully updated License No. " + rlpId + ", Type: " + rlpType);
				} else {
					logDebug("**ERROR: can't create ref lic prof: " + myResult.getErrorMessage());
					logMessage("**ERROR: can't create ref lic prof: " + myResult.getErrorMessage());
				}
			}
	}

	if (isAdd) {
		newLic = aa.licenseScript.createLicenseScriptModel();
		newLic.setBusinessLicense(accNum);
		newLic.setLicenseExpirationDate(aa.date.parseDate(expDate));
		myResult = aa.licenseScript.createRefLicenseProf(newLic);

		if (myResult.getSuccess()) {
			logDebug("Successfully added License No. " + rlpId + ", Type: " + rlpType);
			logMessage("Successfully added License No. " + rlpId + ", Type: " + rlpType);
			return true;
		} else {
			logDebug("**ERROR: can't create ref lic prof: " + myResult.getErrorMessage());
			logMessage("**ERROR: can't create ref lic prof: " + myResult.getErrorMessage());
			return false;
		}
	}
}
