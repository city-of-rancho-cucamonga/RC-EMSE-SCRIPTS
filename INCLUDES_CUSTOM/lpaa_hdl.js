function lpaa_hdl() {
	if (capId) {
		var licNum = licProfObject.getLicenseNbr();
		var rlpType = licProfObject.getLicenseType();

		if (licNum != null && licNum != "" && rlpType != null && licNum != "") {
			var ExpDate = null;
			var accountNum = null;
			var status = null;

			//TEST
			//var HURLArgList = "https://209.150.82.95/StateLicense/" + licNum;
			//PROD
			var HURLArgList = "https://businesslicense.cityofrc.us/StateLicense/" + licNum;
			var HOutObj = aa.httpClient.get(HURLArgList);
			if (HOutObj.getSuccess()) {
				var HOut = HOutObj.getOutput();
				var Hsr = aa.proxyInvoker.newInstance("java.io.StringBufferInputStream", new Array(HOut)).getOutput();
				var HsaxBuilder = aa.proxyInvoker.newInstance("org.jdom.input.SAXBuilder").getOutput();
				var Hdocument = HsaxBuilder.build(Hsr);
				var Hroot = Hdocument.getRootElement();
				var Account = Hroot.getChild("Account");
				//var StateLicenseNum = unescape(Account.getChild("StateLicenseNum").getText()).replace(/\+/g, " ");
				status = unescape(Account.getChild("Status").getText()).replace(/\+/g, " ");
				ExpDate = unescape(Account.getChild("ExpireDate").getText()).replace(/\+/g, " ");
				accountNum = unescape(Account.getChild("AccountNum").getText()).replace(/\+/g, " ");

				if (status == "LICENSED") {
					UpdateLicense(ExpDate, accountNum, licNum, rlpType);
				} else if (status == "NOTFOUND") {
					logMessage("Business License: Not found");
				} else if (status == "EXPIRED") {
					UpdateLicense(ExpDate, accountNum, licNum, rlpType);
				}
			} else {
				logMessage("System Error HDL FAILURE");
			}
		}
	}
}
