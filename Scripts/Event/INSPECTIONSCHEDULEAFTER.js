
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ISA:' + appTypeArray[0] + '/*/*/*');
branch('ISA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ISA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ISA:' + appTypeString);

