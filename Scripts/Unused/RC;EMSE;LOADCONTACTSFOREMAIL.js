
iCon = null;
contactArray = new Array();
contactArray = getContactArray();
for (iCon in contactArray)    if (exists(contactArray[iCon]['contactType'],rcContactTypes)) 
//start replaced branch: RC:EMSE:EmailNotificationAndReport_Loop
 {
params = aa.util.newHashtable();
var acaUrl = 'http://aca.accela.com/cityofrc/';
tContact = contactArray[iCon];
getRecordParams4Notification(params);
getACARecordParam4Notification(params,acaUrl);
getContactParams4Notification(params,tContact);
logDebug('Contact: ' + tContact['businessName'] + ' ' + tContact['email']);
if (rcAttachReport) {
	var rParams=aa.util.newHashMap();
	getRecordParams4Notification(rParams);
	var rcFile =  new Array(generateReport(rcReportTemplate,rParams,cap.getCapModel().getModuleName()));
	}

if (!matches(tContact['email'],null,'',undefined)) {
	sendNotification('noreply@cityofrc.us',tContact['email'],'',notificationTemplate ,params,rcFile);
	}

}
//end replaced branch: RC:EMSE:EmailNotificationAndReport_Loop;

