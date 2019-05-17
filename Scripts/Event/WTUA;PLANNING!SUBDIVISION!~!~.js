
if (wfTask == 'Appeal' && wfStatus == 'Appealed') {
	
//replaced branch(PLN:EMSECreatePlnAppealRecord)
PLN:EMSECreatePlnAppealRecord();
	}

if (wfTask == 'Application Submittal' && matches(wfStatus,'Accepted','Resubmitted')) {
	closeTaskOnTSI('Application Submittal','Not Required');
	}

if (wfTask == 'Review Consolidation' && wfStatus == 'Incomplete') {
	wfTaskNames = new Array();
	wfTaskNames = loadTasks(capId);
	for (x in wfTaskNames) 		if (wfTaskNames[x].status == 'Corrections Required') 			editTaskSpecific('Application Submittal',x,'CHECKED');
	for (x in wfTaskNames) 		if (wfTaskNames[x].status != 'Corrections Required') editTaskSpecific('Application Submittal',x,'UNCHECKED');
	}

if (wfTask=='Application Submittal' && matches(wfStatus,'Accepted','Resubmitted')) {
	editAppSpecific('KEY DATES.30 Day Clock',dateAdd(wfDateMMDDYYYY,30));
	}

if (matches(wfTask, 'Staff Report', 'Planning Commission', 'Historic Preservation Commission', 'Permit Issuance') && matches(wfStatus, 'Approved','Denied', 'Issued')) {
	editAppSpecific('KEY DATES.Appeal Period End Date',dateAdd(wfDateMMDDYYYY,10));
	}

if (matches(wfTask, 'Staff Report', 'Planning Commission', 'Historic Preservation Commission','City Council 2nd Read', 'Permit Issuance') && wfStatus == 'Denied') {
	editAppSpecific('KEY DATES.Expiration Date',dateAdd(wfDateMMDDYYYY,365));
	}

if (wfTask == 'Committee Report Preparedness' && matches(wfStatus,'Docket for Committees','Complete')) {
	deactivateTaskOnTSI('Committee Report Preparedness');
	}

