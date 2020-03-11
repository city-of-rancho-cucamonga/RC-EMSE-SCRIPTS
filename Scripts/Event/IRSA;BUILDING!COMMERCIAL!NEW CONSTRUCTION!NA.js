
if (inspType == 'Final Inspection' && inspResult == 'Approved') {
	//replaced branch(ENG:EMSEUpdateEnvCDDRecordAndEmail)
	engUpdateEnvCddRecordAndEmail();
    priAddrRec = priAddressOnCap();
	email('sid.siphomsay@cityofrc.us', 'noreply@accela.com', 'Final Inspection at' + priAddrRec, 'Final Inspection has been scheduled for Record# ' + capIDString + ' at ' + priAddrRec +'. Please respond accordingly');
}

if (inspType == 'Fire Final' && matches(inspResult, 'Approved') && AInfo['FIRE SITE INFO RECORD.Fire Site Info Record'] != null) {
	//replaced branch(EMSE:BLDFCS:FDOPERATINGPRMT)
	bldFcsOperatingPermit();
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
