function bldReferToEngCDD() {
	// Spec #1 : communication
	//build parameters
	var bparams = aa.util.newHashtable();
	addParameter(bparams, "$$RecCustomNbr$$", capIDString);

	//get email template info
	var tmpl = aa.communication.getNotificationTemplate("BLD_REFER_TO_ENGCDD").getOutput();
	var ebody = tmpl.getEmailTemplateModel().getContentText();
	var esub = tmpl.getEmailTemplateModel().getTitle();
	var efrom = tmpl.getEmailTemplateModel().getFrom();
	var eto = tmpl.getEmailTemplateModel().getTo();
	var ecc = tmpl.getEmailTemplateModel().getCc();

	//send email
	sendNotification(efrom, eto, ecc, "BLD_REFER_TO_ENGCDD", bparams, null);
}
