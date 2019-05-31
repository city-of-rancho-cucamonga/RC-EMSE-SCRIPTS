function fireDistCorrections() {
	// get the ASIT table Contacts
	var parentId = getParent();
	if (!parentId) {
		throw "parent Id not found";
	}
	parentIdString = parentId.getCustomID();
	comment("what is parentIdString = " + parentIdString);

	// Spec #1 : communication
	var save2edms = true;
	var ca = new Array;
	ca = loadASITable("CONTACT INFO", parentId);
	if (ca.length > 0)
		for (var i in ca) {
			var c = ca[i];
			if (c["Send Email"] == "CHECKED") {
				//Email
				var tmpl = aa.communication.getNotificationTemplate("FIRE DISTRICT INSPECTION REPORT").getOutput();
				var ebody = tmpl.getEmailTemplateModel().getContentText();
				var esub = tmpl.getEmailTemplateModel().getTitle();
				var efrom = tmpl.getEmailTemplateModel().getFrom();
				var eto = tmpl.getEmailTemplateModel().getTo();
				var ecc = tmpl.getEmailTemplateModel().getCc();

				//run report
				var hm = aa.util.newHashMap()
					hm.put("altId", capId.getCustomID() + "");
				sendReportInEmail(capId, capId.getCustomID(), "Inspection Report for Email", hm, "Fire", "ADMIN", efrom, c["Email Address"], ecc, esub, ebody, false);
			}
		}

	if (save2edms) {
		//run report
		var hm = aa.util.newHashMap()
			hm.put("altId", capId.getCustomID() + "");
		sendReportInThread(capId, capId.getCustomID(), "Inspection Report", hm, "Fire", "ADMIN", efrom, "", "", esub, ebody, save2edms, false);
	}
	// Spec #2 : update workflow
	closeTask("Correction Notice", "Correction Notice Sent", "updated via insp result", "");

	// Spec #3 : add inspection
	scheduleInspection("Follow-up Inspection", 30, getLastInspector("Initial Inspection"), null, "Scheduled via Script");
}
