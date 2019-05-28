
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
bldUpdateGisObjects();
	}

// DISABLED: CTRCA:Engineering/Grading/*/*:30
// if (publicUser && inspType != lookup('EMSE:NONBLDGINSPTYPES',inspType) && !(matches(inspGroup,'FCS_HGHPLE','FCS_FIXED')) && matches(inspInspector,'',' ')) {
// 	assignInspection(inspId,lookup('EMSE:BLDINSP:LOOKUP',bldInspDist));
// 	}

// DISABLED: CTRCA:Engineering/Grading/*/*:z20
// if (cap.isCreatedByACA()) {
// 	email('sid.siphomsay@cityofrc.us','noreply@cityofrc.us','----TEST TEST TEST ---A Grading application has been submitted in Citizen Access ' + capIDString, 'A Grading application ' + capIDString + ' was submitted via ACA.  Please review it and proceed as appropriate.');
// 	}

