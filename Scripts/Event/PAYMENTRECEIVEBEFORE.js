
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('PRB:' + appTypeArray[0] + '/*/*/*');
branch('PRB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('PRB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('PRB:' + appTypeString);

