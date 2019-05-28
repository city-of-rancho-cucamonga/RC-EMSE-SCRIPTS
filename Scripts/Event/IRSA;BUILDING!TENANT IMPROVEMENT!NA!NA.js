
if (inspType == 'Final Inspection' && inspResult == 'Approved' && AInfo['FIRE SITE INFO RECORD.Operational Permit Required'] == 'Yes') {
	email('shane.adams@cityofrc.us,jennifer.quan@cityofrc.us,sid.siphomsay@cityofrc.us,tammie.graciano@cityofrc.us','noreply@accela.com','Operational Permit Required for '+ capIDString +'','Final Inspection has been approved for Record# '+ capIDString +'. Please respond accordingly');
	}

if (inspType == 'Fire Final' && matches(inspResult,'Approved') && AInfo['FIRE SITE INFO RECORD.Fire Site Info Record'] != null) {
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

if (inspType == 'Final Inspection' && inspResult == 'Approved') {
	//replaced branch(ENG:EMSEUpdateEnvCDDRecordAndEmail)
engUpdateEnvCddRecordAndEmail();
	}

