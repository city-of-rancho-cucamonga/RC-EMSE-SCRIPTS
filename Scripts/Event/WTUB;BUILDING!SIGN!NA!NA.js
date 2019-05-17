
var pId = getParent();
var feeRecBal = 0;
comment('what is pId = ' + pId);
if (pId) {
	feeRecBal = feeBalanceByRecord(pId);
	comment('what is feeRecBal = $ ' + feeRecBal);
	}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && pId && feeRecBal > 0) {
	cancel = true;
	showMessage = true;
	logMessage('There is a balance due of $' + feeRecBal + ' on the parent record of ' + pId.getCustomID());
	}

