function engCreateEnvCddRecord() {

	childIdCDD = createChild('Engineering', 'Environmental', 'CDD', 'NA', capName);
	copyOwner(capId, childIdCDD);
	copyLicensedProf(capId, childIdCDD);
	updateAppStatus('Pending', 'Created from' + capIDString, childIdCDD);
	aa.cap.copyCapWorkDesInfo(capId, childIdCDD);
	holdId = capId;
	capId = childIdCDD;
	copyParcelGisObjects();
	capId = holdId;
	childIdCDDAltId = childIdCDD.getCustomID();
	priAddrRec = priAddressOnCap();
	email('Marissa.Ostos@cityofrc.us, scott.rapp@cityofrc.us, rebecca.fuller@cityofrc.us, sid.siphomsay@cityofrc.us', 'noreply@accela.com, 'A new CDD record was created: ' + childIdCDDAltId, 'Please use Accela Automation to review the CDD Record ' + childIdCDDAltId + '. The PMT associated with this record is ' + capId.getCustomID() + ' with the primary address of ' + priAddrRec + '.');
	editAppSpecific('CD INFORMATION.PMT Number', capIDString, childIdCDD);
	editAppSpecific('CD INFORMATION.Project Size (Sq Ft)', getSumFromASIT('AREA INFORMATION', 'Area Square Footage'), childIdCDD);
	editAppSpecific('CD INFORMATION.Project Value', getAppCalcValue(), childIdCDD);
	if (appTypeArray[2] == 'New Construction') {
		editAppSpecific('CD INFORMATION.New Construction', 'CHECKED', childIdCDD);
	}

	if (appTypeArray[1] == 'Tenant Improvement') {
		editAppSpecific('CD INFORMATION.Renovation', 'CHECKED', childIdCDD);
	}

	if (appTypeArray[3] == 'Demolition') {
		editAppSpecific('CD INFORMATION.Demolition', 'CHECKED', childIdCDD);
	}

}
