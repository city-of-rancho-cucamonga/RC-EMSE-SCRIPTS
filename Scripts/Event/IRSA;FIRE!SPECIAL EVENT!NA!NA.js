
if (matches(inspType, 'Special Event Inspection', 'Follow-Up Inspection') && inspResult == 'Passed') {
	closeTask('Inspections', inspResult, 'Closed via Script', '');
	closeTask('Permit Issuance', 'Issued', 'Closed via Script', '');
	closeTask('Closed', 'Closed', 'Closed via Script', '');
	//email('Robert.ball@cityofrc.us','noreply@accela.com','The following Special Event Permit ' + capIDString + ' Inspection has successfully passed','Special Event Permit ' + capIDString + ' has passed their inspection');
}
