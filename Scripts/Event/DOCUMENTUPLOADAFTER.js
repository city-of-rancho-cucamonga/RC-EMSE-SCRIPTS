
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('DUA:' + appTypeArray[0] + '/*/*/*');
branch('DUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('DUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('DUA:' + appTypeString);
// DISABLED: DocumentUploadAfter:06 - for EDR
// if (publicUser==true && !(capIDString.indexOf('TMP') > 0)) {
// 	for (var i = 0;
// 	i < documentModelArray.size();
// 	i++) if (matches(documentModelArray.get(i).getDocCategory(), 'Plans / Drawings')) email(emailRCStaffNewEDR(),'edr-noreply@cityofrc.us','New plans/drawings were uploaded to ' + capIDString, 'New plans/drawings were uploaded to ' + capIDString + '.<br><br> Please review the plans/drawings to make sure they meet the submission requirements and assign the Document Review Task(s) to the appropriate Department(s). Thank you.<br><br> City of Rancho Cucamonga Accelerate');
// 	}

// DISABLED: DocumentUploadAfter:07
// if (publicUser==true && !(capIDString.indexOf('TMP') > 0)) {
// 	for (var i = 0;
// 	i < documentModelArray.size();
// 	i++) var DocCat = documentModelArray.get(i).getDocCategory().toString();
// 	email(emailRCStaffNewEDR(),'edr-noreply@cityofrc.us',DocCat +' were uploaded to ' + capIDString, 'New plans/drawings were uploaded to ' + capIDString + '.<br><br> Please review the '+DocCat+' to make sure they meet the submission requirements and assign the Document Review Task(s) to the appropriate Department(s). Thank you.<br><br> City of Rancho Cucamonga Accelerate');
// 	}

if (publicUser==true && !(capIDString.indexOf('TMP') > 0)) {
	for (var i = 0;
	i < documentModelArray.size();
	i++) var DocCat = documentModelArray.get(i).getDocCategory().toString();
	email(emailRCStaffNewEDR(),'edr-noreply@cityofrc.us',DocCat +' were uploaded to ' + capIDString, 'New plans/drawings were uploaded to ' + capIDString + '.<br><br> Please review the '+DocCat+' to make sure they meet the submission requirements and assign the Document Review Task(s) to the appropriate Department(s). Thank you.<br><br> The following planner: '+capDetail.getAsgnStaff()+' is currently assigned to the record;
	<br><br> City of Rancho Cucamonga Accelerate');
	}

