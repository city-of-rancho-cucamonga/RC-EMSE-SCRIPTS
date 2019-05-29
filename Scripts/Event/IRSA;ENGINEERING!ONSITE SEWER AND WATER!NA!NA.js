
if (matches(inspType, 'Final Inspection') && inspResult == 'Approved') {
	closeTask('Inspections', 'Final Inspection Complete', 'Closed via script', '');
	setTask('Closed', 'N', 'Y');
	updateAppStatus('Finalized', 'Updated via script');
}
