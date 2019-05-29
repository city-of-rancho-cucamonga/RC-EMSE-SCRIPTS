function emailPermitForRecord() {

	var rcEmailTemplate = 'ACA_MESSAGE_NEW_RECORD_SEND_PERMIT';
	var rcReportTemplate = 'Building Permit';
	var rcAttachReport = false;
	var rcFile = new Array();
	var rcContactTypes = new Array('Applicant', 'Owner', 'Contact');
	rcSendEmailWithReport(rcEmailTemplate, rcReportTemplate, rcAttachReport, rcFile, rcContactTypes);

}
