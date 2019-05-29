
if (inspType == 'Gas Utility Clearance' && inspResult == 'Approved') {
	rcSendNotificationTemplateEmail('BLD_UTILITYRELEASE_GASCO');
}

if (matches(inspType, 'Final Plumbing') && inspResult == 'Approved' && typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	closeTask('Inspections', 'Final Inspection Complete', 'Closed via script', '');
	setTask('Closed', 'N', 'Y');
	updateAppStatus('Finalized', 'Updated via script');
}
