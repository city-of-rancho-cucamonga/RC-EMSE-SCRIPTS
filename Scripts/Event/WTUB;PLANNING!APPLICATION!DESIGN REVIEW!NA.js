
childStatus = false;
childIdE = childGetByCapType('Planning/Application/CEQA Review/NA');
//comment('what is childIdE = ' + childIdE);
if (!matches(childIdE,false,undefined)) {
	childStatus = getRecordStatus(childIdE);
	//comment('what is childStatus = ' + childStatus);
	}

// DISABLED: WTUB:Planning/Application/Design Review/NA:03
// if (wfTask == 'Staff Report' && wfStatus == 'Final Report Distributed' && childStatus != 'Completed') {
// 	cancel=true;
// 	showMessage=true;
// 	comment('Environmental Review must be closed first');
// 	}

