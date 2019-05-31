function capHasExpiredProfRC(pLicType) {

	itemCap = capId;
	if (arguments.length > 1)
		itemCap = arguments[1];

	//get Licensed Profs on CAP
	var licProfResult = aa.licenseScript.getLicenseProf(itemCap);
	if (!licProfResult.getSuccess()) {
		logDebug("Error getting CAP's license professional: " + licProfResult.getErrorMessage());
		return false;
	}
	var vToday = new Date();
	var vExpired = false;
	var licProfList = licProfResult.getOutput();
	if (licProfList) {
		for (i in licProfList) {
			if (pLicType == null || pLicType == "" || pLicType.toUpperCase().equals(licProfList[i].getLicenseType().toUpperCase())) {
				var licNum = licProfList[i].getLicenseNbr();

				var vResult = refLicProfGetDate(licNum, "EXPIRE");
				if (vResult < vToday) {
					vExpired = true;
					logDebug("Licence # " + licNum + " license expired on " + jsDateToMMDDYYYY(vResult));
					return vExpired;
				}
				var vResult = refLicProfGetDate(licNum, "BUSINESS");
				if (vResult < vToday) {
					vExpired = true;
					logDebug("Licence # " + licNum + " business license expired on " + jsDateToMMDDYYYY(vResult));
					return vExpired;
				}
				var vResult = refLicProfGetDate(licNum, "INSURANCE");
				if (vResult < vToday) {
					vExpired = true;
					logDebug("Licence # " + licNum + " insurance expired on " + jsDateToMMDDYYYY(vResult));
					return vExpired;
				}
				var vResult = refLicProfGetDate(licNum, "WORKCOMP");
				if (vResult < vToday) {
					vExpired = true;
					logDebug("Licence # " + licNum + " workers comp expired on " + jsDateToMMDDYYYY(vResult));
					return vExpired;
				}
			}
		}
	}
	return false;
}
