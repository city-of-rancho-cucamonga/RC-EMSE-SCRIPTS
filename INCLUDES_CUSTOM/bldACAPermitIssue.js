function bldACAPermitIssue() {
	// Spec #1 : communication
	var save2edms = true;
	var priRecAddr = priAddressOnCap();
	comment("what is primary address = " + priRecAddr);
	var ca = new Array;
	ca = getContactArray();
	if (ca.length > 0) {
		var params = aa.util.newHashtable();
		addParameter(params, "$$recBLDId$$", capIDString);
	}
	for (var i in ca) {
		var c = ca[i];
		if (c["Contact Type"] == "Applicant") {
			//Email
			var tmpl = aa.communication.getNotificationTemplate("BLD_ACA_PERMIT").getOutput();
			var ebody = tmpl.getEmailTemplateModel().getContentText();
			var esub = tmpl.getEmailTemplateModel().getTitle();
			var efrom = tmpl.getEmailTemplateModel().getFrom();
			var eCc = tmpl.getEmailTemplateModel().getCc();

			var notificationName = c["firstName"] + " " + c["lastName"];

			if (notificationName) {
				addParameter(params, "$$notificationName$$", notificationName);
			}
			//run report
			var hm = aa.util.newHashMap()
				hm.put("capid", capId.getCustomID() + "");
			sendReportInThread(capId, capId.getCustomID(), "51-Expired Permit Letter", hm, "Building", "ADMIN", efrom, c["emailAddress"], "", esub, ebody, false, true);

		}
	}

	if (save2edms) {
		//run report
		var hm = aa.util.newHashMap()
			hm.put("capid", capId.getCustomID() + "");
		sendReportInThread(capId, capId.getCustomID(), "51-Expired Permit Letter", hm, "Fire", "ADMIN", efrom, "", "", esub, ebody, save2edms, false);
	}
	// Spec #2 : update workflow
	closeTask("Application Submittal", "Accepted - Plan Review Not Req", "updated via ACA workflow", "");
	closeTask("Permit Issuance", "Issued", "updated via ACA workflow", "");
}
