
if (inspType == 'Temporary Power') {
	insertSubProcess('Inspections', 'BLD_NEWCON_UTILITYGAS', true);
	insertSubProcess('Utility Meter Release', 'BLD_NEWCONINSP_UTILITYMTRREL', true);
	insertSubProcess('Gas Meter Release', 'BLD_NEWCONINSP_GASMTRREL', true);
}


inspStatus = aa.inspection.getInspectionStatus();
if (inspType == 'Drywall, Nailing, Interior Lath' && inspStatus == 'Scheduled') {
	priAddrRec = priAddressOnCap();
	email('sid.siphomsay@cityofrc.us', 'noreply@accela.com', 'Dry wall Inspection at' + priAddrRec, 'Dry Wall Inspection has been scheduled for Record# ' + capIDString + ' at ' + priAddrRec +'. Please respond accordingly');
}
