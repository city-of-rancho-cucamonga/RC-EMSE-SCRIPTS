function emailRCStaffNewEDR() {
	var appCap = aa.cap.getCap(capId).getOutput();
	var appCapType = appCap.getCapType().toString();
	var appCapTypeArr = appCapType.split("/");
	var appT1 = appCapTypeArr[0];
	var appT2 = appCapTypeArr[1];

	// These are e-mail groups to simplify changes. If more than one e-mail, separate with comma
	var emlBldNoFCS = "sid.siphomsay@cityofrc.us,edrnotification@cityofrc.us";
	var emlBldFCS = "sid.siphomsay@cityofrc.us,edrnotification@cityofrc.us";
	var emlEngPC = "AA.EngineeringPlansCoordinator@cityofrc.us,sid.siphomsay@cityofrc"; // For Engineering records of type ROW, LCP, OLP, Plan Check
	var emlEngCIP = "AA.EngineeringPlansCoordinator@cityofrc.us,sid.siphomsay@cityofrc"; // For Engineering records of type CIP
	var emlPlanning = "AA.PlanningPlansCoordinator@cityofrc.us,sid.siphomsay@cityofrc.us";
	var emlIS = "sid.siphomsay@cityofrc.us";

	if (appT1 == "Building" && appT2 != "FCS") {
		return emlBldNoFCS;
	} // Building No FCS
	else if (appT1 == "Building" && appT2 == "FCS") {
		return emlBldFCS;
	} // Building FCS
	else if (appT1 == "Engineering" && (appT2 == "Plan Check" || appT2 == "LCP" || appT2 == "ROW" || appT2 == "OLP" || appT2 == "Plan Check" || appT2 == "Grading" || appT2 == "WQMP" || appT2 == "Onsite Sewer and Water" || appT2 == "STR")) {
		return emlEngPC;
	} // Engineering Plan Check
	else if (appT1 == "Engineering" && (appT2 == "CIP Permit" || appT2 == "CIP Design")) {
		return emlEngCIP;
	} // Engineering CIP
	else if (appT1 == "Planning") {
		return emlPlanning;
	} // Engineering Environmental
	else {
		return emlIS;
	}

} // end emailRCStaffNewEDR
