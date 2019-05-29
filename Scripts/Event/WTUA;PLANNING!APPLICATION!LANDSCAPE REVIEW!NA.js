
if (wfTask == 'Application Submittal' && wfStatus == 'Resubmitted') {
	editTaskDueDate('Engineering Review', dateAdd(null, 5, 'Y'));
	editTaskDueDate('Public Works Review', dateAdd(null, 5, 'Y'));
	editTaskDueDate('FCS Review', dateAdd(null, 5, 'Y'));
	editTaskDueDate('Planning Review', dateAdd(null, 5, 'Y'));
}
