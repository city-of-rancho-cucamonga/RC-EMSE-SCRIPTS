if (wfTask == 'Application Submittal' && wfStatus == 'Invoiced Fees') 

{
	priAddrRec = priAddressOnCap();
	email('Sid.Siphomsay@cityofrc.us', 'AA-NoReply@cityofrc.us', 'Invoiced Fee has been applied on: ' + capIDString, 'The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
}
