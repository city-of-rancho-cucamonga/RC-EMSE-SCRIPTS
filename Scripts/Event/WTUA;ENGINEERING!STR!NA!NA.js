if (wfTask == 'Application Submittal' && wfStatus == 'Invoiced Fees') 

{
	priAddrRec = priAddressOnCap();
	email('Sid.Siphomsay@cityofrc.us', 'AA-NoReply@cityofrc.us', 'Invoiced Fee has been applied on: ' + capIDString, 'The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
}

if (wfTask == 'Closed' && wfStatus == 'Final') 

{
	priAddrRec = priAddressOnCap();
	email('Sid.Siphomsay@cityofrc.us', 'AA-NoReply@cityofrc.us', 'The Street Tree Removal and Replacement Application is closed on: ' + capIDString, 'The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
}