
if (inspResult == 'Completed') {
	closeTask('Service Request',inspResult,'Updated via script','');
	}

if (inspResult == 'Completed' && capStatus == 'Active') {
	rcSendNotificationTemplateEmail('FD_SERVICEREQUEST_NOTIFY');
	}

if (inspResult == 'Completed') {
	updateAppStatus('Completed','Updated by script');
	}

if (inspResult == 'Follow-Up Needed') {
	updateAppStatus('Follow-Up Needed','Updated by script');
	}

