function plnCreateAppealRecord() {

childIdDRC=createChild('Planning','Appeal','Planning Commission Decision','NA',capName);
copyOwner(capId,childIdDRC);
copyLicensedProf(capId,childIdDRC);
updateAppStatus('Pending','Created from' + capIDString,childIdDRC);
aa.cap.copyCapWorkDesInfo(capId, childIdDRC);
holdId = capId;
capId = childIdDRC;
copyParcelGisObjects();
capId = holdId;

}
