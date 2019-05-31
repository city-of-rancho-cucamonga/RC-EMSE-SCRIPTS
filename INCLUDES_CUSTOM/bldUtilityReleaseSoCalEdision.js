function bldUtilityReleaseSoCalEdision() {
	// Spec #1 : communication
	var save2edms = true;
	var priRecAddr = priAddressOnCap();
	comment("what is primary address = " + priRecAddr);{
		var params = aa.util.newHashtable();
		addParameter(params, "$$priAddrRec$$", priRecAddr);
		addParameter(params, "$$recBLDId$$", capIDString);
	}

	//Email
	var tmpl = aa.communication.getNotificationTemplate("BLD_UTILITYRELEASE_SOCALEDISON").getOutput();
	var ebody = tmpl.getEmailTemplateModel().getContentText();
	var esub = tmpl.getEmailTemplateModel().getTitle();
	var efrom = tmpl.getEmailTemplateModel().getFrom();
	var eto = tmpl.getEmailTemplateModel().getTo();
	var ecc = tmpl.getEmailTemplateModel().getCc();

	//run report
	var hm = new Array();
	sendReportInThread(capId, capId.getCustomID(), "Trade Permit", hm, "Building", "ADMIN", efrom, eto, ecc, esub, ebody, true, true);
}
