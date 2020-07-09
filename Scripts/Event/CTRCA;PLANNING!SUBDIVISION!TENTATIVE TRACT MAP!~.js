
if (AInfo['GENERAL INFO.Tract Map Number'] != null) {
	newAltID = 'SUBTT' + AInfo['GENERAL INFO.Tract Map Number'];
	var updateResut = aa.cap.updateCapAltID(capId, newAltID);
}

email('sid.siphomsay@cityofrc.us', 'noreply@accela.com', cap.getCapType().getAlias().toUpperCase() + ' - a new application was submitted via Accelerate: ' + newAltID, 'A(n) ' + cap.getCapType().getAlias() + ' application (' + newAltID + ') was submitted via Accelerate. Please review it and proceed as appropriate.');
// DISABLED: CTRCA:Planning/Subdivision/Tentative Tract Map/*:25
// $$altID$$ = newAltID;
// DISABLED: CTRCA:Planning/Subdivision/Tentative Tract Map/*:30
// if (publicUser == true) {
// 	br_nch('ACA:EMSE:ReceivedNotification');

// 	}
