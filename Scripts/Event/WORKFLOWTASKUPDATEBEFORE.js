
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('WTUB:' + appTypeArray[0] + '/*/*/*');

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('WTUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('WTUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('WTUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('WTUB:' + appTypeString);

