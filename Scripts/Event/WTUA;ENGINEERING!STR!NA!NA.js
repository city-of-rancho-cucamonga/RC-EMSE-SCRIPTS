
if (wfTask == 'Application Submittal' && wfStatus == 'Accepted') 
{
	priAddrRec = priAddressOnCap();
	email('Sid.Siphomsay@cityofrc.us,Adriana.SantaCruz@cityofrc.us', 'AA-NoReply@accela.com', 'Invoiced Fee has been applied on: ' + capIDString, 'The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
}


if (wfTask == 'Application Submittal' && wfStatus == 'Invoiced Fees') 
{
	priAddrRec = priAddressOnCap();
	email('Sid.Siphomsay@cityofrc.us,Albert.Espinoza@cityofrc.us,Dean.Rodia@cityofrc.us,Lucas.Mitchell@cityofrc.us', 'AA-NoReply@accela.com', 'Invoiced Fee has been applied on: ' + capIDString, 'The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
}


if (wfTask == 'PW Public Outreach' && wfStatus == 'Invoiced Fees') 
{
	priAddrRec = priAddressOnCap();
	email('Sid.Siphomsay@cityofrc.us,Albert.Espinoza@cityofrc.us,Dean.Rodia@cityofrc.us,Lucas.Mitchell@cityofrc.us', 'AA-NoReply@accela.com', 'Invoiced Fee has been applied on: ' + capIDString, 'The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
}



if (wfTask == 'PW Public Outreach' && wfStatus == 'Invoiced Fees') 
{
	priAddrRec = priAddressOnCap();
	email('Sid.Siphomsay@cityofrc.us,Albert.Espinoza@cityofrc.us,Dean.Rodia@cityofrc.us,Lucas.Mitchell@cityofrc.us', 'AA-NoReply@accela.com', 'Invoiced Fee has been applied on: ' + capIDString, 'The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
}


if (wfTask == 'Closed' && wfStatus == 'Final') 
{
	priAddrRec = priAddressOnCap();
	email('Sid.Siphomsay@cityofrc.us,Albert.Espinoza@cityofrc.us,Dean.Rodia@cityofrc.us,Lucas.Mitchell@cityofrc.us', 'AA-NoReply@accela.com', 'The Street Tree Removal and Replacement Application is closed on: ' + capIDString, 'The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
}


if (wfTask == 'Closed' && wfStatus == 'Final') 
{
	editAppSpecific('KEY DATES.Final', wfDateMMDDYYYY);
	email('Sid.Siphomsay@cityofrc.us', 'AA-NoReply@cityofrc.us', 'The Street Tree Removal and Replacement Application is closed on: ' + capIDString, 'The primary address on this permit is ' + priAddrRec + '. Please review it and respond accordingly.');
}


if (wfTask == 'PW Action' && wfStatus == 'Issued Permit') 
{
	editAppSpecific('KEY DATES.Permit Issued', wfDateMMDDYYYY);
}


if (wfTask == 'PW Action' && wfStatus == 'Issued Permit' && AInfo['Expire Date'] != undefined && AInfo['Expire Date'] != '') 
{
	editAppSpecific('KEY DATES.Permit Expires', AInfo['Expire Date']);
}


if (wfTask == 'Permit Extension' && wfStatus == 'Approved') 
{
	editAppSpecific('KEY DATES.Permit Expires', AInfo['New Expiration Date']);
}



//if (wfTask == 'PW Action' && wfStatus == 'Issued Permit') {
//	editAppSpecific('KEY DATES.Permit Issued', wfDateMMDDYYYY);
//}

//if (wfTask == 'PW Action' && wfStatus == 'Issued Permit' && AInfo['Expire Date'] != undefined && AInfo['Expire Date'] != '') {
//	editAppSpecific('KEY DATES.Permit Expires', AInfo['Expire Date']);
//}


//if (wfTask == 'Permit Extension' && wfStatus == 'Approved') {
//	editAppSpecific('KEY DATES.Permit Expires', AInfo['New Expiration Date']);
//}