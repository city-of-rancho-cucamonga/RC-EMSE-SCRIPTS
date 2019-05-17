
if (wfTask == 'Application Submittal' && matches(wfStatus,'Accepted','Resubmitted')) {
	closeTaskOnTSI('Application Submittal','Not Required');
	}

if (wfTask == 'Review Consolidation' && wfStatus == 'Incomplete') {
	wfTaskNames = new Array();
	wfTaskNames = loadTasks(capId);
	for (x in wfTaskNames) 		if (wfTaskNames[x].status == 'Corrections Required') 			editTaskSpecific('Application Submittal',x,'CHECKED');
	for (x in wfTaskNames) 		if (wfTaskNames[x].status != 'Corrections Required') editTaskSpecific('Application Submittal',x,'UNCHECKED');
	}

if (matches(wfTask,'Application Submittal') && matches(wfStatus, 'Accepted', 'Resubmitted')) {
	
//replaced branch(PLN:EMSE10DayExpedite)
plnTenDayExpedite();
	}

