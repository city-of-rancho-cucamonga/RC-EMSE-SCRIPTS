
if (matches(inspType, 'Pre-Inspection') && inspResult == 'Approved') 
{
	closeTask('Pre Inspection', 'Completed', 'Closed via script', '');
	setTask('Closed', 'N', 'Y');
	setTask('Permit Issuance', 'Y', 'N');
	updateAppStatus('Ready to Issue', 'Updated via script');
}
