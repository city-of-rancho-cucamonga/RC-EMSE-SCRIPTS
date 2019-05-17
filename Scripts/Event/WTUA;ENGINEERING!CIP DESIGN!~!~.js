
if (wfTask == 'Bid Result City Council' && wfStatus == 'Awarded') {
	childCIPPId = createChild('Engineering','CIP Permit','NA','NA','Created from ' + capIDString);
	aa.cap.copyCapWorkDesInfo(capId, childCIPPId);
	editAppSpecific('GENERAL INFO.City Drawing Number',AInfo['GENERAL INFO.City Drawing Number'],childCIPPId);
	editAppSpecific('GENERAL INFO.City Contract Number',AInfo['GENERAL INFO.City Contract Number'],childCIPPId);
	holdId = capId;
	capId = childCIPPId;
	copyParcelGisObjects();
	capId = holdId;
	}

if (wfTask == 'Environmental Review' && wfStatus == 'Required') {
	childCEQAId = createChild('Planning','Application','Environmental','CEQA','Created from ' + capIDString);
	updateAppStatus('Pending','Default set by Script',childCEQAId);
	}

if (wfTask == 'Consolidation Review' && wfStatus == 'Completed') {
	deactivateTaskOnTSINR('Consolidation Review');
	}

if (wfTask == 'Review and Permit Coordination' && wfStatus == 'Addtl Reviews Required') {
	deactivateTaskOnTSINR('Review and Permit Coordination');
	}

