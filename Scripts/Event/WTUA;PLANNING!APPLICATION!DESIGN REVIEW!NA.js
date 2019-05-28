
if (wfTask == 'Planning Commission' && wfStatus == 'Remand Committee') {
	setTask('Planning Commission','N','Y');
	activateTask('Committee Report');
	activateTask('Draft Report','PLN_DESIGNREVIEW_COMMITTEE');
	}

if (matches(wfTask,'Appeal','Review Consolidation') && wfStatus == 'Appealed') {
	//replaced branch(PLN:EMSECreatePlnAppealRecord)
PLN:EMSECreatePlnAppealRecord();
	}

if (matches(wfTask,'Public Notification') && AInfo['Hearing Date'] != null && AInfo['Hearing Type'] != null) {
	var rcUserAssigned='';
	if(capDetail.getAsgnStaff() != null) rcUserAssigned = capDetail.getAsgnStaff();
	else rcUserAssigned = '(A user has not been assigned)';
	var myCapType = '';
	if(cap.getCapType().getAlias()==null) myCapType = cap.getCapType();
	else myCapType = cap.getCapType().getAlias();
	email('jennifer.nakamura@cityofrc.us, jose.ramirez@cityofrc.us','noreply@cityofrc.us','Record # ' + capIDString + ' has been docketed','Record # ' + capIDString + ' has been docketed to the ' + AInfo['Hearing Date'] + ' agenda:' + '<br /><br />Hearing Body: ' + AInfo['Hearing Body'] + '<br />Hearing Type: ' + AInfo['Hearing Type'] +  '<br />Assigned User: ' + rcUserAssigned + '<br />Application Type: ' + myCapType + '<br /><br />Please review the record and respond as appropriate.');
	}

if (wfTask == 'Committee Report Preparedness' && matches(wfStatus,'Docket for Committees','Complete')) {
	closeTaskOnTSI('Committee Report Preparedness','Not Required');
	}

