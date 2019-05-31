function sendReportInEmail(itemCap, itemCapIDString, reportName, reportParamters, module, reportUser, emailFrom, emailTo, emailCC, emailSubject, emailContent, saveReport, sendEmail) {

	// Step 1.  Get Report Model by ReportName
	if (saveReport == null)
		saveReport = true;
	if (sendEmail == null)
		sendEmail = true;

	var reportInfoResult = aa.reportManager.getReportInfoModelByName(reportName);
	if (reportInfoResult.getSuccess() == false) {
		// Notify adimistrator via Email, for example
		logDebug("Could not found this report " + reportName);
		return false;
	}

	// Step 2. Initialize report
	report = reportInfoResult.getOutput();
	report.setModule(module);
	report.setCapId(itemCap.getID1() + "-" + itemCap.getID2() + "-" + itemCap.getID3());
	report.setReportParameters(reportParamters);
	if (saveReport)
		report.getEDMSEntityIdModel().setAltId(itemCapIDString);

	// Step 3. Check permission on report
	var permissionResult = aa.reportManager.hasPermission(reportName, reportUser);
	if (permissionResult.getSuccess() == false || permissionResult.getOutput().booleanValue() == false) {
		// Notify adimistrator via Email, for example
		logDebug("The user " + reportUser + " does not have perssion on this report " + reportName);
		return false;
	}

	// Step 4. Run report
	var reportResult = aa.reportManager.getReportResult(report);
	if (reportResult.getSuccess() == false) {
		// Notify adimistrator via Email, for example
		logDebug("Could not get report from report manager normally, error message please refer to: " + reportResult.getErrorMessage());
		return false;
	}

	// Step 5, Store Report File to harddisk
	if (sendEmail) {
		reportResult = reportResult.getOutput();
		var reportFileResult = aa.reportManager.storeReportToDisk(reportResult);
		if (reportFileResult.getSuccess() == false) {
			// Notify adimistrator via Email, for example
			logDebug("The appliation does not have permission to store this temporary report " + reportName + ", error message please refer to:" + reportResult.getErrorMessage());
			return false;
		}

		// Step 6. Send Report via Email
		var reportFile = reportFileResult.getOutput();
		var sendResult = aa.sendEmail(emailFrom, emailTo, emailCC, emailSubject, emailContent, reportFile);
		if (sendResult.getSuccess()) {
			logDebug("A copy of this report has been sent to the valid email addresses.");
		} else {
			logDebug("System failed send report to selected email addresses because mail server is broken or report file size is great than 5M.");
		}
	}
	return true;
}

