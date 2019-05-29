
if (matches(inspType, 'Final Plumbing') && inspResult == 'Approved' && typeof(SEPTICINFORMATIONDETAIL) == 'object') {
	closeTask('Inspections', 'Final Inspection Complete', 'Closed via script', '');
	setTask('Closed', 'N', 'Y');
	updateAppStatus('Finalized', 'Updated via script');
}
