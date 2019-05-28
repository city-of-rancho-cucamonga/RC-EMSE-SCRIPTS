
var recAsgnStaff = capDetail.getAsgnStaff();
comment('What is recAsgnStaff = ' + recAsgnStaff);
if (recAsgnStaff != null) {
	wfTkArray = new Array();
	wfTkArray = loadTasks(capId);
	for (x in wfTkArray)
		if (matches(x, 'Review Consolidation') && wfTkArray[x].active == 'Y')
			assignTask(x, recAsgnStaff);
}
