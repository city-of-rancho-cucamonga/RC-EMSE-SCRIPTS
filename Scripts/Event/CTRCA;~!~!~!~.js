// DISABLED: ConvertToRealCapAfter:08
// if (publicUser == true) {
// 	createCapComment('ConvertToRealCapAfter');
// 	}

if (!appMatch('Planning/Subdivision/Tentative Tract Map/New') && !appMatch('Planning/Subdivision/Tentative Parcel Map/New')) {
	email(emailRCStaffNewAPP(), 'noreply@cityofrc.us', cap.getCapType().getAlias().toUpperCase() + ' - a new application was submitted via Accelerate: ' + capIDString, 'A(n) ' + cap.getCapType().getAlias() + ' application (' + capIDString + ') was submitted via Accelerate. Please review it and proceed as appropriate.');
}

if (!appMatch('Building/Residential/NP/NA') && !appMatch('Planning/Subdivision/Tentative Tract Map/New') && !appMatch('Planning/Subdivision/Tentative Parcel Map/New')) {

	//start replaced branch: ACA:EMSE:ReceivedNotification
	{
		notificationTemplate = 'ACA_MESSAGE_NEW_RECORD_RECEIVED_LTRHEAD';
		contactTypes = new Array('Applicant');
		iCon = null;
		contactArray = new Array();
		contactArray = getContactArray();
		for (iCon in contactArray)
			if (exists(contactArray[iCon]['contactType'], contactTypes))
				//start replaced branch: ACA:EMSE:ReceivedNotification_Loop
			{
				params = aa.util.newHashtable();
				acaUrl = 'http://aca.accela.com/cityofrc';
				tContact = contactArray[iCon];
				getRecordParams4Notification(params);
				getACARecordParam4Notification(params, acaUrl);
				getContactParams4Notification(params, tContact);
				logDebug('Contact: ' + tContact['businessName'] + ' ' + tContact['email']);
				if (!matches(tContact['email'], null, '', undefined)) {
					sendNotification('noreply@cityofrc.us', tContact['email'], '', notificationTemplate, params, new Array());
				}

			}
		//end replaced branch: ACA:EMSE:ReceivedNotification_Loop;

	}
	//end replaced branch: ACA:EMSE:ReceivedNotification;
}
