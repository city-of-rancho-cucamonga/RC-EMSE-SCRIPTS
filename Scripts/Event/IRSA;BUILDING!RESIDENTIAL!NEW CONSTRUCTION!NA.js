
if (inspType == 'Final Inspection' && inspResult == 'Approved') {
	//replaced branch(ENG:EMSEUpdateEnvCDDRecordAndEmail)
engUpdateEnvCddRecordAndEmail();
	}

if (inspType == 'Electrical Utility Clearance (Edison)' && inspResult == 'Approved') {
	rcSendNotificationTemplateEmail('BLD_UTILITYRELEASE_SOCALEDISON');
	}

if (inspType == 'Electrical Utility Clearance (RCMU)' && inspResult == 'Approved') {
	rcSendNotificationTemplateEmail('BLD_UTILITYRELEASE_RCMU');
	}

if (inspType == 'Gas Utility Clearance' && inspResult == 'Approved') {
	rcSendNotificationTemplateEmail('BLD_UTILITYRELEASE_GASCO');
	}

