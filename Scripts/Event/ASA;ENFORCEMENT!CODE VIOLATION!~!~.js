
copyParcelGisObjects();
if (validateGisObjects()) {
	
//replaced branch(ENF:EMSEUpdateGISObjects)
enfUpdateGisObjects();
	}

var ceInspDist = 0;
if (currentUserGroup != 'EnforcementPublicUser') {
	ceInspDist = getGISInfo('CITYOFRC','Enforcement Inspection Areas','INSPECTOR');
	//comment('what is ceInspDist = ' + ceInspDist);
	}

if (currentUserGroup != 'EnforcementPublicUser') {
	assignCap(lookup('EMSE:CODEOFFICER:LOOKUP',ceInspDist));
	}

if (currentUserGroup != 'EnforcementPublicUser') {
	assignTask('Case Initiated',lookup('EMSE:CODEOFFICER:LOOKUP',ceInspDist));
	}

var rcInitiatedBy = cap.getInitiatedProduct();
var enfAsgnStaff = capDetail.getAsgnStaff();
if (rcInitiatedBy == 'CodeOfficer') {
	closeTask('Case Initiated', 'Assigned', 'App entered via CodeOfficer app. Closed by script.', 'Closed by script');
	scheduleInspection('Initial Inspection',0,enfAsgnStaff,null,null);
	}

