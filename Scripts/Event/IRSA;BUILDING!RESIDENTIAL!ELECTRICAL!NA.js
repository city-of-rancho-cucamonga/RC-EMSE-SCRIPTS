
if (inspType == 'Electrical Utility Clearance (Edison)' && inspResult == 'Approved') {
	rcSendNotificationTemplateEmail('BLD_UTILITYRELEASE_SOCALEDISON');
	}

if (inspType == 'Electrical Utility Clearance (RCMU)' && inspResult == 'Approved') {
	rcSendNotificationTemplateEmail('BLD_UTILITYRELEASE_RCMU');
	}

if (matches(inspType,'Final Electrical') && inspResult == 'Approved' && typeof(ELECTRICALINFORMATIONTABLE) == 'object') {
	closeTask('Inspections','Final Inspection Complete','Closed via script','');
	setTask('Closed','N','Y');
	updateAppStatus('Finalized','Updated via script');
	}

