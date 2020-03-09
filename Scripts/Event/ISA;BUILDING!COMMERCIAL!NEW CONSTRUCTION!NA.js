
if (inspType == 'Temporary Power') {
	insertSubProcess('Inspections', 'BLD_NEWCON_UTILITYGAS', true);
	insertSubProcess('Utility Meter Release', 'BLD_NEWCONINSP_UTILITYMTRREL', true);
	insertSubProcess('Gas Meter Release', 'BLD_NEWCONINSP_GASMTRREL', true);
}


if (inspType == 'Drywall, Nailing, Interior Lath' && inspStatus == 'Scheduled') {
	email('sid.siphomsay@cityofrc.us,ssiphomsay@yahoo.com', 'noreply@accela.com', 'Drywall, Nailing, Interior Lath inspection notification for ' + capIDString + '-' +priAddrRec, 'Drywall, Nailing, Interior Lath inspection has been scheduled for Record# ' + capIDString + '. Please respond accordingly');
}
