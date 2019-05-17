
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
if (matches(currentUserID, 'JENNIFER.NAKAMURA', 'ROLAND')) {
	showDebug = 1;
	showMessage=true;
	}

branch('WTUA:' + appTypeArray[0] + '/*/*/*');
branch('WTUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('WTUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('WTUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('WTUA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('WTUA:' + appTypeString);

