
if(currentUserID == 'ROLAND') showDebug=true;
lpArray = getLicenseProfessional(capId);
if (lpArray) {
	licProfObject = lpArray[0];
	
//replaced branch(LPUA:Building/*/*/*)
licProfUpdateBld();
	}

