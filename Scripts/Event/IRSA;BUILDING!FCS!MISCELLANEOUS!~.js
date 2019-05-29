
if (matches(inspType, 'Fire Final') && inspResult == 'Approved' && typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
	closeTask('Inspections', 'Final Inspection Complete', 'Closed via script', '');
	setTask('Closed', 'N', 'Y');
	updateAppStatus('Finalized', 'Updated via script');
}
