
if (AInfo['GENERAL INFO.Parcel Map Number'] != null) {
	newAltID = 'SUBTPM' + AInfo['GENERAL INFO.Parcel Map Number'];
	var updateResut = aa.cap.updateCapAltID(capId, newAltID);
}

email('sid.siphomsay@cityofrc.us', 'noreply@cityofrc.us', cap.getCapType().getAlias().toUpperCase() + ' - a new application was submitted via Accelerate: ' + newAltID, 'A(n) ' + cap.getCapType().getAlias() + ' application (' + newAltID + ') was submitted via Accelerate. Please review it and proceed as appropriate.');
