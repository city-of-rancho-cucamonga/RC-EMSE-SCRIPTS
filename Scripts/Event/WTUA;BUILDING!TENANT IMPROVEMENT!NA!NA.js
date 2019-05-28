
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Final CO Issued') {
	closeTask('Closed','Closed','Closed via Script from CofO','');
	}

if (wfTask == 'Application Submittal' && wfStatus == 'Submitted' && calcValue >= 100000) {
	//replaced branch(ENG:EMSECreateEnvCDDRecord)
engCreateEnvCddRecord();
	}

if (isTaskActive('CVWD Review') && isTaskStatus('CVWD Review','Not Required')) {
	setTask('CVWD Review','N','Y','BLD_TI_SUB');
	}

if (isTaskActive('Special Districts Review') && isTaskStatus('Special Districts Review','Not Required')) {
	setTask('Special Districts Review','N','Y','BLD_TI_SUB');
	}

if (isTaskActive('SB County Health Review') && isTaskStatus('SB County Health Review','Not Required')) {
	setTask('SB County Health Review','N','Y','BLD_TI_SUB');
	}

if (wfTask == 'Permit Issuance' && wfStatus == 'Ready to Issue' && feeExists('CD020', 'NEW') && calcValue > 100000 && getSumUnitAmount() > 0) {
	updateFee('CD010', 'ENG_CD', 'FINAL', getSumUnitAmount(), 'N');
	}

if (wfTask=='Engineering Review' && matches(wfStatus,'Approved', 'Approved W/Corrections')) {
	//replaced branch(ENG:CDD:EMSE:UPDATEASI)
engCddUpdateASI();
	}

if (wfTask == 'Building Review' && wfStatus == 'Approved' && AInfo['Operational Permit Required'] == 'Yes') {
	editAppSpecific('FIRE SITE INFO RECORD.Operational Permit Required', 'Yes');
	}

if (wfTask == 'Building Review' && wfStatus == 'Approved' && AInfo['Operational Permit Required'] == 'No') {
	editAppSpecific('FIRE SITE INFO RECORD.Operational Permit Required', 'No');
	}

if (wfTask == 'Building Review' && wfStatus == 'Approved' && AInfo['Maximum Occupancy Load'] > 0) {
	editAppSpecific('FIRE SITE INFO RECORD.Max. Occupancy Load', AInfo['Maximum Occupancy Load']);
	}

if (isTaskActive('Operating Permit')) {
	setTask('FCS Review','Y','N','BLD_TI_V360');
	}

if (isTaskActive('FCS Review')) {
	setTask('Review Consolidation','N','N','BLD_TI_V360');
	}

// DISABLED: WTUA:Building/Tenant Improvement/NA/NA:85 SELF-HUAL
// if (wfTask == 'Environmental Review' & wfStatus == 'Approved' & AInfo['Self Haul'] == 'Yes') {
// 	email ('sid.siphomsay@cityofrc.us','noreply@cityofrc.us','Self Haul Permit - Record# ' + capIDString + ' has been approved.','Please review. Case planner ' + capDetail.getAsgnStaff() + '.');
// 	}

// DISABLED: WTUA:Building/Tenant Improvement/NA/NA:90 SELF-HAUL int email
// if (AInfo['ENVIRONMENTAL INFO.How do you plan on disposing of your waste?'] == 'Self-Haul' && wfTask == 'Engineering Review' && matches(wfStatus,'Approved','Corrections Required')) {
// 	activateTask('Environmental Review');
// 	email('sid.siphomsay@cityofrc.us','noreply@cityofrc.us','A Self-Haul Permit for Record # (' + capIDString + ') Has Been Select','A Self-Haul Permit for Record #' + capIDString + ' has been selected. Please review it and make any necessary updates.');
// 	}

// DISABLED: WTUA:Building/Tenant Improvement/NA/NA:92 SELF-HAUL ext email
// if (AInfo['ENVIRONMENTAL INFO.How do you plan on disposing of your waste?'] == 'Self-Haul' && wfTask == 'Engineering Review' && matches(wfStatus,'Approved','Corrections Required')) {
// 	emailContact('Important Information Regarding Your Self-Haul Permit Requirements: ' +capIDString, 'You have selected the option to self-haul waste from your project.  A Self-Haul permit option is available for licensed general contractors that own hauling equipment and is required if Burrtec Waste is not utilized for any portion of the project. Please visit https://www.cityofrc.us/cityhall/engineering/env/cdd.asp for more information on the self-haul permit requirements. All questions should be directed to Environmental Programs during business hours, Mondays through Thursdays between the hours of 7:00 a.m. and 6:00 p.m. at (909) 919-2635.');
// 	}

// DISABLED: WTUA:Building/Tenant Improvement/NA/NA:99 (to Confirm with Fire before activate)
// if (wfTask == 'Building Review' && wfStatus == 'Approved' && AInfo['Operational Permit Required'] == 'Yes') {
// 	email('sid.siphomsay@cityofrc.us, ssiphomsay@yahoo.com','noreply@cityofrc.us','Building Review Approved: Operational Permit Required!','This is a text area.');
// 	}

