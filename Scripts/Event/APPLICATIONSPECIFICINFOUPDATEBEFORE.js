
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ASIUB:' + appTypeArray[0] + '/*/*/*');
branch('ASIUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ASIUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ASIUB:' + appTypeString);

