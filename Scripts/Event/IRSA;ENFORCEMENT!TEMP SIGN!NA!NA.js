
if (inspType == 'Initial Inspection' && inspResult == 'Sign Removed') {
	closeTask('Inspections', inspResult, 'Updated via script', '');
}

if (inspType == 'Follow-up Inspection' && matches(inspResult, 'Sign Removed', 'Permit Obtained')) {
	closeTask('Inspections', inspResult, 'Updated via script', '');
}
