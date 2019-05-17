
if (publicUser != true && AInfo['GENERAL INFO.Tract Map Number'] != null) {
	newAltID = 'SUBTT' + AInfo['GENERAL INFO.Tract Map Number'];
	var updateResut = aa.cap.updateCapAltID(capId,newAltID);
	if(updateResut.getSuccess()) comment('Record Number updated to ' + newAltID);
	else comment('<font color=red size=2><b>Failed to update record alt id:'+updateResut.getErrorMessage()+'</b></font>');
	}

