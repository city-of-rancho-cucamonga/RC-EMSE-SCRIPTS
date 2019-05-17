
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('IRSA:' + appTypeArray[0] + '/*/*/*');
branch('IRSA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('IRSA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('IRSA:' + appTypeString);

