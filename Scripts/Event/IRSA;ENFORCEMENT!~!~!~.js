
if (inspType == 'Initial Inspection' && matches(inspResult,'Unfounded','Duplicate Case','Referred to Fire','Referred to Other','RV Grandfathered','Referred to Building')) {
	branchTask('Initial Inspection',inspResult,'Updated by Inspection Result','');
	civicaURL = 'https://accela.cityofrc.us/CRMInterface/CallCRMService.asmx';
	sentServiceRequestNumber(civicaURL);
	closeTask('Case Closed','Close','Closed via Script','');
	inspCancelAll();
	}

if (inspType == 'Initial Inspection' && matches(inspResult,'Founded', 'NVO - Monitor')) {
	closeTask('Initial Inspection',inspResult,'Updated by Inspection Result','Note');
	editTaskSpecific('Notification','Last Inspection ID', inspId);
	}

if (inspType == 'Follow-up Inspection' && inspResult == 'Compliant') {
	branchTask('Follow-up Inspection',inspResult,'Updated by Inspection Result','Note');
	civicaURL = 'https://accela.cityofrc.us/CRMInterface/CallCRMService.asmx';
	sentServiceRequestNumber(civicaURL);
	closeTask('Case Closed','Close','Closed via Script','');
	inspCancelAll();
	}

if (inspType == 'Follow-up Inspection' && matches(inspResult,'In Violation', 'NVO - Monitor')) {
	closeTask('Follow-up Inspection',inspResult,'Updated via Script','');
	editTaskSpecific('Notification','Last Inspection ID', inspId);
	}

// DISABLED: IRSA:Enforcement/*/*/*:06
// if (inspType == 'Priority Inspection' && inspResult == 'Compliant') {
// 	br_nchTask('Follow-up Inspection',inspResult,'Updated by Inspection Result','Note');
// 	civicaURL = 'https://accela.cityofrc.us/CRMInterface/CallCRMService.asmx';
// 	sentServiceRequestNumber(civicaURL);
// 	closeTask('Case Closed','Close','Closed via Script','');
// 	inspCancelAll();
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:07
// if (inspType == 'Priority Inspection' && matches(inspResult,'In Violation', 'NVO - Monitor')) {
// 	closeTask('Follow-up Inspection',inspResult,'Updated via Script','');
// 	editTaskSpecific('Notification','Last Inspection ID', inspId);
// 	}


//replaced branch(EMSE:Enforcement:WorkflowTaskAssignment)
enfWorkflowTaskAssignment();

