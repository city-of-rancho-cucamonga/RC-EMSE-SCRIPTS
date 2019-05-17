
if (wfTask == 'Application Submittal' && matches(wfStatus,'Accepted','Resubmitted')) {
	closeTaskOnTSI('Application Submittal','Not Required');
	}

if (wfTask == 'Review Consolidation' && wfStatus == 'Incomplete') {
	wfTaskNames = new Array();
	wfTaskNames = loadTasks(capId);
	for (x in wfTaskNames) 		if (wfTaskNames[x].status == 'Corrections Required') 			editTaskSpecific('Application Submittal',x,'CHECKED');
	for (x in wfTaskNames) 		if (wfTaskNames[x].status != 'Corrections Required') editTaskSpecific('Application Submittal',x,'UNCHECKED');
	}

if (wfTask == 'Appeal' && wfStatus == 'Not Appealed') {
	email ('sid.siphomsay@cityofrc.us,dat.tran@cityofrc.us,robert.ball@cityofrc.us','noreply@cityofrc.us','Conditional Use Permit Record# ' + capIDString + ' has been approved.','Please review the case for any outstanding Condition of Approval. Please contact case planner ' + capDetail.getAsgnStaff() + ' for any question.');
	}

