
// DISABLED: WTUA:Fire/Site Info/NA/NA:00
// inspUpdateAllCarryOverFlags();
if (validateGisObjects()) {
	
//replaced branch(FD:EMSE:UpdateGISObjects)
fdUpdateGisObjects();
	}

if (wfTask == 'Correction Notice' && (AInfo['Last Inspection ID'] != '' || AInfo['Last Inspection ID'] != null)) {
	updateInspCarryOverFlag(AInfo['Last Inspection ID']);
	}

var fireInspDist;
fireInspDist = 0;
if (wfTask == 'Correction Notice' && matches(wfStatus,'Correction Notice Sent','Compliance Order Issued','Red Tagged')) {
	scheduleInspectDateGroup('FD_INSP','Follow-Up Inspection',AInfo['Compliance Due Date'],currentUserID);
	editTaskSpecific('Correction Notice','Compliance Due Date','');
	//scheduleInspectDate('Follow-Up Inspection',AInfo['Compliance Due Date'],currentUserID);
	}

if (wfTask == 'Court Process' && wfStatus == 'Criminal Complaint') {
	setTask('Arraignment','Y','N','FD_FLDINSP_COURT');
	}

if (wfTask == 'Follow-Up Inspection' && wfStatus == 'Refer to Admin Citation') {
	setTask('Citation Appeal','Y','N','FD_FLDINSP_CITATION');
	}

if (wfTask == 'Follow-Up Inspection' && wfStatus == 'Non-Compliant') {
	inspCancelAll();
	closeTask('Status','Non-Compliant','Non-Compliant','');
	setTask('Operating Permit','N','Y');
	childId=createChild('Fire','Site Info','NA','NA',capName);
	updateAppStatus('Active','Created from' + capIDString,childId);
	aa.cap.copyCapWorkDesInfo(capId,childId);
	copyAppSpecific(childId);
	copyASITables(capId, childId);
	copyConditions(capId, childId);
	copyOwner(capId, childId);
	holdId = capId;
	capId = childId;
	copyParcelGisObjects();
	var fireInspDist = 0;
	var fireInspector;
	copyPermitsToPermitHistoryASIT(capId);
	removeASITable('PERMITS');
	removeASITable('INSPECTION TYPES');
	removeASITable('REDUCTIONS');
	removeASITable('FEES AND CHARGES');
	fireInspDist = getGISInfo('CITYOFRC','Fire Inspection Areas','Id');
	fireInspector = lookup('EMSE:FDINSPECTOR:LOOKUP',fireInspDist);
	logDebug('fireInspDist = ' + fireInspDist + ', fireInspector = ' + fireInspector);
	if(fireInspector) assignCap(fireInspector);
	if(fireInspector) assignTask('Initial Inspection',fireInspector);
	if(fireInspector)          scheduleInspection('Initial Inspection',0,fireInspector,null,null);
	else           scheduleInspection('Initial Inspection',0,currentUserID,null,null);
	capId = holdId;
	}


//replaced branch(EMSE:Fire:WorkflowTaskAssignment)
fireWorkflowTaskAssignment();
if (wfTask == 'Citation Appeal' && wfStatus == 'Decision Rendered') {
	setTask('Appeal to Superior Court','Y','N','FD_FLDINSP_CITATION');
	}

if (wfTask == 'Status' && matches(wfStatus,'Building Demolished','Suite/Unit Closed')) {
	updateAppStatus('Vacant','Status changed to vacant via script');
	}

if (wfTask == 'Status' && matches(wfStatus,'Schedule Annual')) {
	childId=createChild('Fire','Site Info','NA','NA',capName);
	updateAppStatus('Active','Created from' + capIDString,childId);
	aa.cap.copyCapWorkDesInfo(capId,childId);
	copyAppSpecific(childId);
	copyASITables(capId, childId);
	copyConditions(capId, childId);
	copyOwner(capId, childId);
	holdId = capId;
	capId = childId;
	copyParcelGisObjects();
	var fireInspDist = 0;
	var fireInspector;
	copyPermitsToPermitHistoryASIT(capId);
	removeASITable('INSPECTION TYPES');
	removeASITable('REDUCTIONS');
	removeASITable('FEES AND CHARGES');
	fireInspDist = getGISInfo('CITYOFRC','Fire Inspection Areas','Id');
	fireInspector = lookup('EMSE:FDINSPECTOR:LOOKUP',fireInspDist);
	logDebug('fireInspDist = ' + fireInspDist + ', fireInspector = ' + fireInspector);
	if(fireInspector) assignCap(fireInspector);
	if(fireInspector) assignTask('Initial Inspection',fireInspector);
	if(fireInspector)          scheduleInspection('Initial Inspection',0,fireInspector,null,null);
	else           scheduleInspection('Initial Inspection',0,currentUserID,null,null);
	capId = holdId;
	}

// DISABLED: WTUA:Fire/Site Info/NA/NA:62
// var rcFireInspArea = getGISInfoArray2('CITYOFRC','Fire Inspection Areas','Id',-5,'Feet');
// var rcVHFHSZ = getGISInfoArray2('CITYOFRC','VHFSZ','HAZ_CLASS',-5,'Feet');
// var rcFirstDueBoundary = getGISInfoArray2('CITYOFRC','First Due Boundary','FIRSTDUE_',-5,'Feet');
// var rcIsVacant = getGISInfo2('CITYOFRC','Parcels','VACANT', -5, 'Feet');
// DISABLED: WTUA:Fire/Site Info/NA/NA:63
// if (rcFireInspArea.length == 0) {
// 	editAppSpecific('GIS INFO.Inspection Area','N/A');
//	} else {
// 	editAppSpecific('GIS INFO.Inspection Area',rcFireInspArea.toString());
// 	}

// DISABLED: WTUA:Fire/Site Info/NA/NA:64
// if (!rcVHFHSZ || rcVHFHSZ.length == 0) {
// 	editAppSpecific('GIS INFO.VHFHSZ','N/A');
//	} else {
// 	editAppSpecific('GIS INFO.VHFHSZ',rcVHFHSZ.toString());
// 	}

// DISABLED: WTUA:Fire/Site Info/NA/NA:65
// if (rcFirstDueBoundary.length == 0 || !rcFirstDueBoundary) {
// 	editAppSpecific('GIS INFO.Fire Station','N/A');
//	} else {
// 	editAppSpecific('GIS INFO.Fire Station',rcFirstDueBoundary.toString());
// 	}

// DISABLED: WTUA:Fire/Site Info/NA/NA:66
// if (rcIsVacant == 'YES') {
// 	editAppSpecific('GIS INFO.Weed Abatement Area',rcIsVacant.toString());
//	} else {
// 	editAppSpecific('GIS INFO.Weed Abatement Area','NO');
// 	}


//replaced branch(EMSE:Fire:WorkflowTaskAssignment)
fireWorkflowTaskAssignment();
if (wfTask=='Operating Permit' && wfStatus=='Issue Permit') {
	editAppSpecific('KEYDATES.Issued Date',sysDateMMDDYYYY);
	inspDate=getInspectionDateByType('Initial Inspection');
	expDate=dateAddMonths(inspDate,24);
	editAppSpecific('KEYDATES.Expiration Date',expDate);
	}

// DISABLED: WTUA:Fire/Site Info/NA/NA:99
// email( 'awilliams@accela.com', 'tst_awilliams@accela.com','ASIUA from Rancho for: ' + capId.getCustomID(), debug);

