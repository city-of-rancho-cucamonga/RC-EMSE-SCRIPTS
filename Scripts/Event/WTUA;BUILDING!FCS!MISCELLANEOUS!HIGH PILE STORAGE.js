
if (validateGisObjects()) {
	//replaced branch(FD-BLD:EMSE:UpdateGISObjects)
	fdBldUpdateGisObjects();
}

if (wfTask == 'FCS Review' && AInfo['Operational Permit Required'] == 'Yes') {
	editAppSpecific('FIRE SITE INFO RECORD.Operational Permit Required', 'Yes');
}

if (wfTask == 'FCS Review' && AInfo['Operational Permit Required'] == 'No') {
	editAppSpecific('FIRE SITE INFO RECORD.Operational Permit Required', 'No');
}

if (wfTask == 'Review Consolidation' && wfStatus == 'Approved') {
	priAddrRec = priAddressOnCap();
	// TODO: consider using a lookup std choice table for this list
	email('Jennifer.Quan@cityofrc.us, sid.siphomsay@cityofrc.us', 'noreply@cityofrc.us', 'Operation Permit Required for HPS', ' Record # ' + capIDString + ' An Operation Permit is required. Please review and respond accordingly.');
}
