function rcSendEmailWithReport(eTemplate, rTemplate, isAttachReport, rcFile, rcContacts) {
	// Set up standard choice with the following:
	/*
	 *  var rcEmailTemplate="ACA_MESSAGE_NEW_RECORD_SEND_PERMIT";
	 *  var rcReportTemplate="Construction Permit";
	 *  var rcAttachReport=false;
	 *  var rcFile=new Array();
	 *  var rcContactTypes = new Array("Applicant");
	 *  rcSendEmailWithReport(rcEmailTemplate,rcReportTemplate,rcAttachReport,rcFile,rcContactTypes);
	 */

	// load the contact list
	var iCon = null;
	var contactArray = new Array();
	contactArray = getContactArray();
	for (iCon in contactArray)
		if (exists(contactArray[iCon]["contactType"], rcContacts)) {
			params = aa.util.newHashtable();
			var acaUrl = "http://aca.accela.com/cityofrc/";
			tContact = contactArray[iCon];
			getRecordParams4Notification(params);
			getACARecordParam4Notification(params, acaUrl);
			getContactParams4Notification(params, tContact);
			logDebug("Contact: " + tContact["businessName"] + " " + tContact["email"]);

			if (!matches(tContact["email"], null, "", undefined)) {
				if (isAttachReport) {
					var rParams = aa.util.newHashMap();
					var theModuleName = cap.getCapModel().getModuleName();
					getRecordParams4Report(rParams);
					var rfile = generateReport(rTemplate, rParams, theModuleName);
					logDebug("rTemplate= " + rTemplate + "\nrParams= " + rParams + "\ntheModuleName= " + theModuleName + "\nrfile= " + rfile);

					if (rfile) {
						var rcFiles = new Array();
						rcFiles.push(rfile);
						sendNotification("noreply@cityofrc.us", tContact["email"], "", eTemplate, params, rcFiles);
					}
				} else {
					sendNotification("noreply@cityofrc.us", tContact["email"], "", eTemplate, params, rcFile);
				}
			}
		}
}
