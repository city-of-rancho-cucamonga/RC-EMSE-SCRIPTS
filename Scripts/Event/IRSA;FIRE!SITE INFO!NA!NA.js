
if (matches(inspType,'Initial Inspection','Field Inspection') && matches(inspResult,'No Violations')) {
	branchTask('Initial Inspection',inspResult,'Updated via Inspection','');
	}

if (matches(inspType,'Initial Inspection','Field Inspection','Follow-Up Inspection') && matches(inspResult,'Suite/Unit Closed')) {
	branchTask('Initial Inspection',inspResult,'Updated via Inspection','');
	updateAppStatus('Vacant','Updated by inspection scheduling');
	}

if (matches(inspType,'Initial Inspection','Field Inspection','Follow-Up Inspection') && matches(inspResult,'Vacant')) {
	branchTask('Initial Inspection',inspResult,'Updated via Inspection','');
	}

if (matches(inspType,'Initial Inspection','Field Inspection') && matches(inspResult,'Corrections Needed')) {
	closeTask('Initial Inspection',inspResult,'Updated via Inspection','');
	inspector = getInspector(inspType);
	assignTask('Follow-Up Inspection',inspector);
	assignTask('Correction Notice',inspector);
	editTaskSpecific('Correction Notice','Last Inspection ID', inspId);
	}

if (inspType == 'Follow-Up Inspection' && matches(inspResult, 'Violations Corrected' ,'Violations Corrected - Op Req')) {
	branchTask('Follow-Up Inspection',inspResult,'Updated via Inspection','');
	if(balanceDue==0 && isTaskActive('Operating Permit')) updateTask('Operating Permit','Ready to Issue','Updated via Script','');
	}

if (inspType == 'Follow-Up Inspection' && inspResult == 'Corrections Needed') {
	loopTask('Follow-Up Inspection',inspResult,'Updated via Inspection');
	inspector = getInspector(inspType);
	assignTask('Follow-Up Inspection',inspector);
	assignTask('Correction Notice',inspector);
	editTaskSpecific('Correction Notice','Last Inspection ID', inspId);
	}

if (inspType == 'Follow-Up Inspection' && inspResult == 'Refer to Admin Citation') {
	closeTask('Follow-Up Inspection',inspResult,'Updated via Inspection');
	activateTask('Citation Appeal','Y','N','FD_INSP_CITATION');
	}

if (inspType == 'Follow-Up Inspection' && inspResult == 'Refer to City Prosecutor') {
	closeTask('Follow-up Inspection',inspResult,'Updated via Inspection');
	activateTask('Court Process');
	insertSubProcess('Court Process','FD_INSP_COURT',false);
	setTask('Arraignment','N','N','FD_INSP_COURT');
	}

if (inspType =='Initial Inspection' && matches(inspResult,'No Violations - OP Req')) {
	branchTask('Initial Inspection',inspResult,'Updated via Inspection','');
	if(!isTaskActive('Operating Permit')) addAdHocTask('WFADHOC_PROCESS','Operating Permit','');
	if( balanceDue == 0) updateTask('Operating Permit','Ready to Issue','Updated via Script','');
	}

if (matches(inspType,'Initial Inspection','Field Inspection', 'Follow-Up Inspection') && matches(inspResult,'Corrections Needed - OP Req')) {
	closeTask('Initial Inspection',inspResult,'Updated via Inspection','');
	inspector = getInspector(inspType);
	assignTask('Follow-Up Inspection',inspector);
	assignTask('Correction Notice',inspector);
	editTaskSpecific('Correction Notice','Last Inspection ID', inspId);
	addAdHocTask('WFADHOC_PROCESS','Operating Permit','');
	}

if (inspType == 'Field Inspection' && matches(wfStatus,'Corrections Needed')) {
	activateTask('Correction Notice','N');
	inspector = getInspector(inspType);
	assignTask('Correction Notice',inspector);
	}

if (matches(inspType,'Initial Inspection','Follow-Up Inspection') && matches(inspResult,'No Violations', 'No Violations - OP Req', 'Violations Corrected', 'Violations Corrected - OP Req')) {
	editAppSpecific('INTERNAL USE ONLY.Invoice Fees','Yes');
	logDebug('Flagged fees for invoicing.');
	}

// DISABLED: IRSA:Fire/Site Info/NA/NA:99
// email( 'awilliams@accela.com', 'tst_awilliams@accela.com','ASIUA from Rancho for: ' + capId.getCustomID(), debug);

