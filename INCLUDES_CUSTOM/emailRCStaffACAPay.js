function emailRCStaffACAPay() {
	var appCap = aa.cap.getCap(capId).getOutput();
	var appCapType = appCap.getCapType().toString();
	var appCapTypeArr = appCapType.split("/");
	var appT1 = appCapTypeArr[0];
	var appT2 = appCapTypeArr[1];

	// These are e-mail groups to simplify changes. If more than one e-mail, separate with comma
	var emlFire = "AA.FireInspection@cityofrc.us";
	var emlBldNoFCS = "sid.siphomsay@cityofrc.us,jennifer.quan@cityofrc.us,Pamela.Wilkerson@cityofrc.us,Francisco.Reynaga@cityofrc.us,Ricardo.Jacquez@cityofrc.us";
	var emlBldFCS = "sid.siphomsay@cityofrc.us,jennifer.quan@cityofrc.us,Pamela.Wilkerson@cityofrc.us,Francisco.Reynaga@cityofrc.us,Ricardo.Jacquez@cityofrc.us";
	var emlEngRLOP = "AA.Engineering@cityofrc.us"; // For Engineering records of type ROW, LCP, OLP, Plan Check
	var emlEngCIP = "AA.Engineering@cityofrc.us"; // For Engineering records of type CIP
	var emlEngEnvironment = "AA.EnvironmentalPrograms@cityofrc.us";
	var emlPlanning = "AA.Planning@cityofrc.us"
		var emlIS = "sid.siphomsay@cityofrc.us";

	if (appT1 == "Fire") {
		return emlFire;
	} // Fire group
	else if (appT1 == "Building" && appT2 != "FCS") {
		return emlBldNoFCS;
	} // Building No FCS
	else if (appT1 == "Building" && appT2 == "FCS") {
		return emlBldFCS;
	} // Building FCS
	else if (appT1 == "Engineering" && (appT2 == "ROW" || appT2 == "LCP" || appT2 == "OLP" || appT2 == "Plan Check")) {
		return emlEngRLOP;
	} // Engineering ROW, LCP, OLP, Plan Check
	else if (appT1 == "Engineering" && (appT2 == "CIP Permit" || appT2 == "CIP Design")) {
		return emlEngCIP;
	} // Engineering CIP
	else if (appT1 == "Engineering" && appT2 == "Environmental") {
		return emlEngEnvironment;
	} // Engineering Environmental
	else if (appT1 == "Planning") {
		return emlPlanning;
	} // Engineering Environmental
	else {
		return emlIS;
	}

} // end emailRCStaffACAPay()
