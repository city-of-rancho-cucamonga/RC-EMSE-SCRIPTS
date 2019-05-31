function asa_hdl() {

	logMessage("DEBUG>> Inside Function asa_hdl");
	//var rlpType = "Contractor";
	if (capId) {
		var capLicenseResult = aa.licenseScript.getLicenseProf(capId);
		if (capLicenseResult.getSuccess()) {
			var capLicenseArr = capLicenseResult.getOutput();
		} else {
			logDebug("**WARNING: getting lic prof: " + capLicenseResult.getErrorMessage());
			return false;
		}
		if (capLicenseArr == null || !capLicenseArr.length) {
			logDebug("**WARNING: no licensed professionals on this CAP");
			return false;
		} else {
			var licProfScriptModel = null;
			var licNum = null;
			var rlpType = null;

			for (var thisLic in capLicenseArr) {
				licProfScriptModel = capLicenseArr[thisLic];
				licNum = licProfScriptModel.getLicenseNbr();
				rlpType = licProfScriptModel.getLicenseType();

				var Hdocument;
				var Hroot;
				//TEST
				//var HURLArgList = "https://209.150.82.95/StateLicense/" + licNum;
				//PROD
				HURLArgList = "https://businesslicense.cityofrc.us/StateLicense/" + licNum;
				var HOutObj = aa.httpClient.get(HURLArgList);
				if (HOutObj.getSuccess()) {
					var HOut = HOutObj.getOutput();
					var Hsr = aa.proxyInvoker.newInstance("java.io.StringBufferInputStream", new Array(HOut)).getOutput();
					var HsaxBuilder = aa.proxyInvoker.newInstance("org.jdom.input.SAXBuilder").getOutput();
					Hdocument = HsaxBuilder.build(Hsr);
					Hroot = Hdocument.getRootElement();
					var Account = Hroot.getChild("Account");
					//var StateLicenseNum = unescape(Account.getChild("StateLicenseNum").getText()).replace(/\+/g, " ");
					var status = unescape(Account.getChild("Status").getText()).replace(/\+/g, " ");
					var ExpDate = unescape(Account.getChild("ExpireDate").getText()).replace(/\+/g, " ");
					var accountNum = unescape(Account.getChild("AccountNum").getText()).replace(/\+/g, " ");

					logDebug("DEBUG>> HDL Return value Account: " + Account);
					logDebug("DEBUG>> HDL Return value status: " + status);
					logDebug("DEBUG>> HDL Return value ExpDate: " + ExpDate);
					logDebug("DEBUG>> HDL Return value accountNum: " + accountNum);

					if (status == "LICENSED") {
						logDebug("DEBUG>> HDL Status is LICENSED.  Call UpdateLicense.");
						UpdateLicense(ExpDate, accountNum, licNum, rlpType);
					} else if (status == "NOTFOUND") {
						logDebug("DEBUG>> HDL Status is NOTFOUND.  Business License was not found.");
						logMessage("Business License: Not found");
					} else if (status == "EXPIRED") {
						logDebug("DEBUG>> HDL Status is EXPIRED.  Call UpdateLicense");
						UpdateLicense(ExpDate, accountNum, licNum, rlpType);
					}
				} else {
					logDebug("System Error HDL FAILURE");
					logMessage("System Error HDL FAILURE");
				}
			}
		}
	}
}
