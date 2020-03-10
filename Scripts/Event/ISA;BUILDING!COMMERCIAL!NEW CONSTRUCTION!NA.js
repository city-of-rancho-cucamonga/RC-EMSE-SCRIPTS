
if (inspType == 'Temporary Power') {
	insertSubProcess('Inspections', 'BLD_NEWCON_UTILITYGAS', true);
	insertSubProcess('Utility Meter Release', 'BLD_NEWCONINSP_UTILITYMTRREL', true);
	insertSubProcess('Gas Meter Release', 'BLD_NEWCONINSP_GASMTRREL', true);
}

if (inspType == 'Drywall, Nailing, Interior Lath') {
	priAddrRec = priAddressOnCap();
	email('sid.siphomsay@cityofrc.us', 'noreply@accela.com', 'Notification for ' + capIDString + '-' + priAddrRec +,   'Dry Wall Inspection has been scheduled for Record# ' + capIDString + ' at ' + priAddrRec +'. Please respond accordingly');
}
