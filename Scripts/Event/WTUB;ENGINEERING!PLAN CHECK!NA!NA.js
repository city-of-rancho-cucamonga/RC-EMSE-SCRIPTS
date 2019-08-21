
if (wfTask == 'Signed Agreements' && wfStatus == 'Completed' && balanceDue > 0) {
	cancel = true;
	showMessage = true;
	comment('Unable to update the Signed Agreements workflow because there is a balance due  $ ' + balanceDue);
}

correctReqd = false;
wfTaskNames = new Array();
wfTaskNames = loadTasks(capId);
for (x in wfTaskNames)
	if (wfTaskNames[x].status == 'Corrections Required')
		correctReqd = true;
if (wfTask == 'City Council' && wfStatus == 'Schedule' && correctReqd) {
	cancel = true;
	showMessage = true;
	comment('Unable to schedule City Council because of a review has corrections required.');
}
