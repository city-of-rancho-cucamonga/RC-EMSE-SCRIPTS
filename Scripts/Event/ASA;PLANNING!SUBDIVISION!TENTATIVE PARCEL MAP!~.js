
if (publicUser != true && AInfo['GENERAL INFO.Parcel Map Number'] != null) {
	newAltID = 'SUBTPM' + AInfo['GENERAL INFO.Parcel Map Number'];
	var updateResut = aa.cap.updateCapAltID(capId, newAltID);
	if (updateResut.getSuccess())
		comment('Record Number updated to ' + newAltID);
	else
		comment('<font color=red size=2><b>Failed to update record alt id:' + updateResut.getErrorMessage() + '</b></font>');
}
