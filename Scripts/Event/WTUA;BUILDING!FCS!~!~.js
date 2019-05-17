
if (wfTask == 'Application Submittal' && wfStatus == 'Resubmitted') {
	editTaskDueDate('FCS Review',dateAdd(null,5,'Y'));
	}

if (wfTask == 'FCS Review' && wfStatus == 'As Built Approved') {
	setTask('FCS Review','N','Y');
	}

if (wfTask == 'Inspections' && wfStatus == 'As-Built Required') {
	activateTask('FCS Review');
	}

// DISABLED: WTUA:Building/FCS/*/*:04
// if (wfTask == 'Inspections' && matches(wfStatus,'Note') && AInfo['FIRE SITE INFO RECORD.Fire Site Info Record'] != null) {
// 	var parentSiteRecIdString = AInfo['FIRE SITE INFO RECORD.Fire Site Info Record'];
// 	var parentSiteRecId = aa.cap.getCapID(parentSiteRecIdString).getOutput();
// 	var recSiteName = getRecAppName(parentSiteRecId);
// 	comment('what is recSiteName = ' + recSiteName);
// 	}

