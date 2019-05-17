
if (wfTask == 'Correction Notice' && matches(wfStatus,'Issued')) {
	scheduleInspectDateGroup('FD_AC','Gate',AInfo['Compliance Due Date'],currentUserID);
	editTaskSpecific('Correction Notice','Compliance Due Date','');
	//scheduleInspectDate('Gate',AInfo['Compliance Due Date'],currentUserID);
	}

