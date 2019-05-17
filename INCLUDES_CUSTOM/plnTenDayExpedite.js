function plnTenDayExpedite() {

var TSI = new Array();
loadTaskSpecific(TSI,capId);
var alertText = ' ';
for (y in TSI) alertText += y + ':' + TSI[y]+';
';
comment('The alertText is '+alertText);
if (AInfo['10 Day Expedited Review'] == 'CHECKED') {
	editTaskDueDate('Planning Review', dateAdd(null,11,'Y'));
	editTaskDueDate('Environmental Review', dateAdd(null,11,'Y'));
	editTaskDueDate('Building Review', dateAdd(null,8,'Y'));
	editTaskDueDate('FCS Review', dateAdd(null,8,'Y'));
	editTaskDueDate('Grading Review', dateAdd(null,8,'Y'));
	editTaskDueDate('Engineering Review', dateAdd(null,8,'Y'));
	editTaskDueDate('Public Works Review', dateAdd(null,8,'Y'));
	}

}
