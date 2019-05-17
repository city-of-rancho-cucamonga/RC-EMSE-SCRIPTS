
scheduleInspection('Initial Inspection',1);
if (getParent()) {
	var tempID = capId;
	capId=getParent();
	scheduleInspection('Verification',1,currentUserID);
	capId = tempID;
	}

