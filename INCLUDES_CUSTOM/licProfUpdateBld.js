function licProfUpdateBld() {

if(matches(currentUserID, 'ROLAND')) showDebug=true;
logDebug('DEBUG >> Testing LPUA:Building');
licNumber = licProfObject.getLicenseNbr();
logDebug('DEBUG >> License Number: ' + licNumber);
cslbMessage = externalLP_CA_CITYOFRC(licNumber,'Contractor',true,false,capId);
logDebug('DEBUG >> cslbMessage: ' + cslbMessage);
if (cslbMessage) {
	showMessage = true;
	if(cslbMessage.length > 0) comment(cslbMessage);
	}

}
