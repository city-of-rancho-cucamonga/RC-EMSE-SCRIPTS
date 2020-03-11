
if (inspType == 'Temporary Power') {
	insertSubProcess('Inspections', 'BLD_NEWCON_UTILITYGAS', true);
	insertSubProcess('Utility Meter Release', 'BLD_NEWCONINSP_UTILITYMTRREL', true);
	insertSubProcess('Gas Meter Release', 'BLD_NEWCONINSP_GASMTRREL', true);
}

if (inspType == 'Final Inspection') {
	priAddrRec = priAddressOnCap();
	email('sid.siphomsay@cityofrc.us', 'noreply@accela.com', 'Final Inspection at' + priAddrRec, 'Final Inspection has been scheduled for Record# ' + capIDString + ' at ' + priAddrRec +'. Please respond accordingly');
}
