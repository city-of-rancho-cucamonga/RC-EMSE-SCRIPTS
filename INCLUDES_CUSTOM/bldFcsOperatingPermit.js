function bldFcsOperatingPermit() {

var parentSiteRecIdString = AInfo['FIRE SITE INFO RECORD.Fire Site Info Record'];
var parentSiteRecId = aa.cap.getCapID(parentSiteRecIdString).getOutput();
var fdOperPrmtId = createCap('Fire/District/Operating Permit/NA',capName);
copyParcels(capId,fdOperPrmtId);
copyAddresses(capId,fdOperPrmtId), copyOwner(capId,fdOperPrmtId);
copyContacts(capId,fdOperPrmtId);
fcsholdId = capId;
capId = fdOperPrmtId;
copyParcelGisObjects();
addParent(parentSiteRecIdString);
deactivateTask('Initial Inspection');
activateTask('Permit Coordination');
closeTask('Permit Coordination','Ready to Issue','Update by Script from FCS Record: ' + capIDString,'');
capId = fcsholdId;
var recSiteName = getRecAppName(parentSiteRecId);
editAppName(recSiteName,fdOperPrmtId);
comment('what is recSiteName = ' + recSiteName);

}
