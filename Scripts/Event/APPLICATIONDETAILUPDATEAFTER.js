
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ADUA:' + appTypeArray[0] + '/*/*/*');
branch('ADUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ADUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ADUA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('ADUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('ADUA:' + appTypeString);

