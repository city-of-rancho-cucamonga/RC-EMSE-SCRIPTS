
var recAsgnStaff = capDetail.getAsgnStaff();
comment('What is recAsgnStaff = ' + recAsgnStaff);
if (recAsgnStaff != null) {
	wfTkArray = new Array();
	wfTkArray = loadTasks(capId);
	for (x in wfTkArray) if (matches(x,'Planning Review','Environmental Review','Review Consolidation','Staff Report') && wfTkArray[x].active == 'Y') assignTask(x,recAsgnStaff);
	}

