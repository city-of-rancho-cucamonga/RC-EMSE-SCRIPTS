
disableTokens = true;
holdCapId = capId;
parentArray = getParents('*/*/*/*');
if (inspType == 'Initial Inspection' && matches(inspResult,'Unfounded','Duplicate Case','Refer to BS','Refer to Fire District','Refer to Other','Refer to PD','Refer to PWS','RV Grandfathered')) {
	branchTask('Initial Inspection',inspResult,'Updated by Inspection Result','');
	closeTask('Case Closed','Closed','','');
	closeTask('Case Closed','Closed','Closed via Script','');
	}

if (inspType == 'Initial Inspection' && matches(inspResult,'Founded')) {
	closeTask('Initial Inspection',inspResult,'Updated by Inspection Result','Note');
	}

if (inspType == 'Initial Investigation' && inspResult == 'Citation') {
	loopTask('Initial Investigation','Recommend Citation','Updated by Inspection Result','Note');
	}

if (inspType == 'Follow-up Inspection' && inspResult == 'Compliant') {
	branchTask('Follow-up Inspection',inspResult,'Updated by Inspection Result','Note');
	closeTask('Case Closed','Closed','','');
	}

if (inspType == 'Follow-up Inspection' && inspResult == 'In Violation') {
	loopTask('Follow-up Inspection',inspResult,'Updated via Script','');
	}

if (inspType == 'Follow-up Inspection' && matches(inspResult,'Refer to Court Process','Refer to Citation Process')) {
	closeTask('Follow-up Inspection',inspResult,'Updated via Script','');
	}

if (inspType == 'Follow-up Inspection' && inspResult == 'Receivership') {
	branchTask('Follow-up Inspection',inspResult,'Updated by Inspection Result','Note');
	addAdHocTask('WFADHOC_PROCESS','Receivership','Receivership',currentUserID);
	}

