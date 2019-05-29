
if (matches(inspResult, 'Approved')) {
	editAppSpecific('KEY DATES.Permit Expired', dateAdd(null, 365));
}

/*
if (inspResult == 'Corrections Needed') {
// TODO syntax error here please review
emailContact("Your inspection generated a corrections notice on permit: ' +capIDString,                 '<p>Corrections are required on your permit (' + capIDString +                  ') for the inspection type, ' + inspType + '.</p><p>Please use the City's online permit portal, Accelerate (http://aca.accela.com/cityofrc/), to review the correction(s) or contact the Building inspector for further details at (909) 477-2710. </p><p>Thank you,<br/><br/>City of Rancho Cucamonga<br/>Building and Safety Services</p>');
}
 */

if (matches(inspType, 'Solar / Photovoltaic Final', 'Final Inspection', 'Pool, Spa Final', 'Final') && inspResult == 'Approved') {
	closeTask('Inspections', 'Final Inspection Complete', 'Closed via script', '');
	setTask('Closed', 'N', 'Y');
	updateAppStatus('Finalized', 'Updated via script');
}
