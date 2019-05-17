
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ASIUA:' + appTypeArray[0] + '/*/*/*');
branch('ASIUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ASIUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ASIUA:' + appTypeString);
// DISABLED: ApplicationSpecificInfoUpdateAfter:06
// if (matches(currentUserID,'GHESS')) {
// 	publicUser = true;
// 	br_nch('ConvertToRealCapAfter');
// 	}

if (matches(currentUserID,'ADMIN')) {
	showDebug = true;
	showMessage= true;
	}

