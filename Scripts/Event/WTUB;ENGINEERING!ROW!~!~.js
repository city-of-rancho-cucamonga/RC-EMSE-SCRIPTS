
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && balanceDue > 0) {
	cancel=true;
	showMessage=true;
	logMessage('Unable to issue the permit because there is a balance due $ ' + balanceDue);
	}

correctReqd = false;
wfTaskNames = new Array();
wfTaskNames = loadTasks(capId);
for (x in wfTaskNames) if (wfTaskNames[x].status == 'Corrections Required') correctReqd = true;
if (wfTask == 'Review Consolidation' && wfStatus == 'Ready to Issue' && correctReqd) {
	cancel=true;
	showMessage=true;
	logMessage('Unable to issue the permit because a review has corrections required.');
	}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && capHasExpiredProfRC('CONTRACTOR')) {
	cancel=true;
	showMessage=true;
	logMessage('Action denied due to expired licensed professional');
	}

if (wfTask == 'Permit Extension' && wfStatus == 'Approved' &&  capHasExpiredProfRC('CONTRACTOR')) {
	cancel=true;
	showMessage=true;
	logMessage('Action denied due to expired licensed professional');
	}

