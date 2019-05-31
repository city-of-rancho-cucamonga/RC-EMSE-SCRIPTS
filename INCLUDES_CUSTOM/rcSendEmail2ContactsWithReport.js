function rcSendEmail2ContactsWithReport(eTemplate, rTemplate, isAttachReport, rcFile, rcContacts) {
	// Set up standard choice with the following:
	/*
	 *  var rcEmailTemplate="ACA_MESSAGE_NEW_RECORD_SEND_PERMIT";
	 *  var rcReportTemplate="Construction Permit";
	 *  var rcAttachReport=false;
	 *  var rcFile=new Array();
	 *  var rcContacts = new Array("emailAddress1","emailAddress2");
	 *  rcSendEmail2ContactsWithReport(rcEmailTemplate,rcReportTemplate,rcAttachReport,rcFile,rcContacts);
	 */

	// Iterate through the contact list
	var iCon = null;
	var tContact;
	for (iCon in rcContacts)
		if (rcContacts.length != 0) {
			params = aa.util.newHashtable();
			var acaUrl = "http://aca.accela.com/cityofrc/";
			tContact = rcContacts[iCon];
			getRecordParams4Notification(params);
			getACARecordParam4Notification(params, acaUrl);
			getContactParams4Notification(params, tContact);
			logDebug("Contact: " + tContact.toString());
			if (!matches(tContact, null, "", undefined)) {
				if (isAttachReport) {
					var rParams = aa.util.newHashMap();
					var theModuleName = cap.getCapModel().getModuleName();
					getRecordParams4Report(rParams);
					var rfile = generateReport(rTemplate, rParams, theModuleName);
					if (rfile) {
						var rcFiles = new Array();
						rcFiles.push(rfile);
						sendNotification("noreply@cityofrc.us", tContact, "", eTemplate, params, rcFiles);
					}
				} else {
					sendNotification("noreply@cityofrc.us", tContact, "", eTemplate, params, rcFile);
				}
			}
		}
}
