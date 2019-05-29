
if (wfTask == 'Application Submittal' && matches(wfStatus, 'Accepted', 'Resubmitted')) {
	editAppSpecific('KEY DATES.30 Day Clock', dateAdd(wfDateMMDDYYYY, 30));
}

if (matches(wfTask, 'Staff Report', 'Planning Commission', 'Historic Preservation Commission', 'Permit Issuance') && matches(wfStatus, 'Approved', 'Denied', 'Issued')) {
	editAppSpecific('KEY DATES.Appeal Period End Date', dateAdd(wfDateMMDDYYYY, 10));
}

if (wfTask == 'Appeal' && wfStatus == 'Not Appealed') {
	editAppSpecific('KEY DATES.Expiration Date', dateAdd(wfDateMMDDYYYY, 1825));
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('KEY DATES.Expiration Date', dateAdd(wfDateMMDDYYYY, 1825));
}

if (matches(wfTask, 'City Council 2nd Read', 'Staff Report') && wfStatus == 'Approved') {
	editAppSpecific('KEY DATES.Expiration Date', dateAdd(wfDateMMDDYYYY, 1825));
}

if (matches(wfTask, 'Staff Report', 'Planning Commission', 'Historic Preservation Commission', 'City Council 2nd Read', 'Permit Issuance') && wfStatus == 'Denied') {
	editAppSpecific('KEY DATES.Expiration Date', dateAdd(wfDateMMDDYYYY, 365));
}

if (wfTask == 'Application Submittal' && matches(wfStatus, 'Accepted', 'Resubmitted')) {
	closeTaskOnTSI('Application Submittal', 'Not Required');
}

if (wfTask == 'Review Consolidation' && wfStatus == 'Incomplete') {
	wfTaskNames = new Array();
	wfTaskNames = loadTasks(capId);
	for (x in wfTaskNames)
		if (wfTaskNames[x].status == 'Corrections Required')
			editTaskSpecific('Application Submittal', x, 'CHECKED');
	for (x in wfTaskNames)
		if (wfTaskNames[x].status != 'Corrections Required')
			editTaskSpecific('Application Submittal', x, 'UNCHECKED');
}

if (wfTask == 'City Council' - á && wfStatus == 'Approved') {
	var rcUserAssigned = '';
	if (capDetail.getAsgnStaff() != null)
		rcUserAssigned = capDetail.getAsgnStaff();
	else
		rcUserAssigned = '(A user has not been assigned)';
	email('Rafael.Balneg@cityofrc.us,Jennifer.Nakamura@cityofrc.us,jose.ramirez@cityofrc.us', 'noreply@cityofrc.us', 'A Project (' + capIDString + ') Has Been Approved', 'Project ' + capIDString + ' has been approved and may require an update by GIS. Please review it and make any necessary updates. If you have any questions, please contact the assigned staff, ' + rcUserAssigned + '.');
}
