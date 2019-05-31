function rcSendNotificationTemplateEmail(eTemplate) {
	// set the report variables as not needed
	var rcReportTemplate = "";
	var attachReport = false;
	var rcFile = new Array();

	// initialize variables
	var theNotificationTemplate;
	var emailFrom;
	var emailTo;
	var emailCc;

	// If a report template name is included add it to the variable and update the report specific variables
	if (arguments.length == 2) {
		rcReportTemplate = arguments[1];
		attachReport = true;
	}

	// Retrieve the parameters for the e-mail
	var params = aa.util.newHashtable();
	var acaUrl = "http://aca.accela.com/cityofrc/";
	getRecordParams4Notification(params);
	getACARecordParam4Notification(params, acaUrl);
	getInspectionResultParams4Notification(params);

	// Load the appropriate notification template and values required to send the notification
	var result = aa.communication.getNotificationTemplate(eTemplate);
	if (result.getSuccess()) {
		theNotificationTemplate = result.getOutput();
		if (theNotificationTemplate) {
			emailFrom = theNotificationTemplate.getEmailTemplateModel().getFrom();
			emailTo = theNotificationTemplate.getEmailTemplateModel().getTo();
			emailCc = theNotificationTemplate.getEmailTemplateModel().getCc();
		} else {
			showMessage = true;
			comment("The notification template name used (" + eTemplate + ") is not valid. Send this message to your system administrator");
			logDebug("theNotificationTemplate returned a null. Verify the template name and try again.");
			return false;
		}
	}

	// Load the report specifics if attachReport is true
	if (attachReport) {
		var rParams = aa.util.newHashMap();
		var theModuleName = cap.getCapModel().getModuleName();
		getRecordParams4Report(rParams);
		var rfile = generateReport(rcReportTemplate, rParams, theModuleName);
		if (rfile) {
			var rcFiles = new Array();
			rcFiles.push(rfile);
			sendNotification(emailFrom, emailTo, emailCc, eTemplate, params, rcFiles);
		}
	} else {
		sendNotification(emailFrom, emailTo, emailCc, eTemplate, params, rcFile);
	}
} // End rcSendNotificationTemplateEmail()
