function enfWorkflowTaskAssignment() {

var codeAsgnStaff = capDetail.getAsgnStaff();
wfTasksArray = new Array();
wfTasksArray = loadTasks(capId);
for (x in wfTasksArray) if (wfTasksArray[x].active == 'Y') assignTask(x,codeAsgnStaff);

}
