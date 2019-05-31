function getInspectionDateByType(inspType) {
	var inspResultObj = aa.inspection.getInspections(capId);
	if (inspResultObj.getSuccess()) {
		var inspList = inspResultObj.getOutput();
		for (xx in inspList)
			if (String(inspType).equals(inspList[xx].getInspectionType())) {
				inspDate = inspList[xx].getInspectionDate();
				inspDateFormatted = dateFormatted(inspDate.getMonth(), inspDate.getDayOfMonth(), inspDate.getYear(), "");
				return inspDateFormatted;
			}
	}
	return false;
}
