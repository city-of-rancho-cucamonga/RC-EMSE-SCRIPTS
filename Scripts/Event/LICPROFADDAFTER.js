
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('LPAA:' + appTypeArray[0] + '/*/*/*');
branch('LPAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('LPAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('LPAA:' + appTypeString);
logDebug('DEBUG>> Call Function lpaa_hdl');
lpaa_hdl();

