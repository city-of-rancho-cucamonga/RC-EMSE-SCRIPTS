
if (typeof(SIGNINFOPERM) == 'object') {
	var chckStructIllum = false;
	for (x in SIGNINFOPERM)
		if (SIGNINFOPERM[x]['Illuminated'] == 'Yes' || SIGNINFOPERM[x]['Structural'] == 'Yes')
			chckStructIllum = true;
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && chckStructIllum) {
	childIdBldSgn = createChild('Building', 'Sign', 'NA', 'NA', capName);
	copyOwner(capId, childIdBldSgn);
	updateAppStatus('Pending', 'Created from' + capIDString, childIdBldSgn);
	aa.cap.copyCapWorkDesInfo(capId, childIdBldSgn);
	holdId = capId;
	capId = childIdBldSgn;
	copyParcelGisObjects();
	capId = holdId;
}
