
params = aa.util.newHashtable();
acaUrl = 'http://aca.accela.com/cityofrc/';
tContact = contactArray[iCon];
getRecordParams4Notification(params);
getACARecordParam4Notification(params,acaUrl);
getContactParams4Notification(params,tContact);
logDebug('Contact: ' + tContact['businessName'] + ' ' + tContact['email']);
var rParams=aa.util.newHashMap();
rParams.put('altId', capId.getCustomID());
var rFile =  new Array(generateReport('Construction Permit',rParams,cap.getCapModel().getModuleName()));
if (!matches(tContact['email'],null,'',undefined)) {
	sendNotification('noreply@cityofrc.us',tContact['email'],'',notificationTemplate ,params,rFile);
	}

