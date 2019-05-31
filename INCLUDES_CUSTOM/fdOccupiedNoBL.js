function fdOccupiedNoBL() {
	// Spec #1 : communication
	var priRecAddr = priAddressOnCap();
	var workDetailDesc = workDescGet(capId);
	{
		var params = aa.util.newHashtable();
		addParameter(params, "$$businessName$$", capName);
		addParameter(params, "$$priAddrRec$$", priRecAddr);
		addParameter(params, "$$workDetailDesc$$", workDetailDesc);
	}

	//get email template info
	var tmpl = aa.communication.getNotificationTemplate("FD_OCCUPIED_NO_BL").getOutput();
	var ebody = tmpl.getEmailTemplateModel().getContentText();
	var esub = tmpl.getEmailTemplateModel().getTitle();
	var efrom = tmpl.getEmailTemplateModel().getFrom();
	var eto = tmpl.getEmailTemplateModel().getTo();
	var ecc = tmpl.getEmailTemplateModel().getCc();

	sendNotification(efrom, eto, ecc, "FD_OCCUPIED_NO_BL", params, null);
}
