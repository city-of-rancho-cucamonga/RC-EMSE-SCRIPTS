
if (matches(inspType,'Final Mechanical') && inspResult == 'Approved' && typeof(MECHANICALINFORMATIONTABLE) == 'object') {
	closeTask('Inspections','Final Inspection Complete','Closed via script','');
	setTask('Closed','N','Y');
	updateAppStatus('Finalized','Updated via script');
	}

